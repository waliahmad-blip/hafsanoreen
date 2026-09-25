const ModeManager = require('../../../src/services/haffu/tools/mode-manager');

describe('ModeManager', () => {
  test('exposes the five operational modes', () => {
    expect(ModeManager.list()).toEqual(['atelier_executive', 'client_sanctuary', 'vendor_portal', 'archival_lab', 'emergency_maintenance']);
  });

  test('legacy get() resolves aliases with fallback', () => {
    expect(ModeManager.get('recovery').name).toBe('Emergency Maintenance');
    expect(ModeManager.get('standard').name).toBe('Atelier Executive');
    expect(ModeManager.get('nonexistent').key).toBe('atelier_executive');
  });

  test('execute() returns full operational posture', () => {
    const r = ModeManager.execute({ mode: 'client_sanctuary' });
    expect(r.status).toBe('operational');
    expect(r.mode.key).toBe('client_sanctuary');
    expect(r.permissions).toBeTruthy();
    expect(r.htmlDashboard).toContain('haffu-mode-dashboard');
    expect(r.founderBriefing).toContain('Mode Briefing');
  });

  test('passes the full embedded test suite', async () => {
    const r = await ModeManager.runFullTestSuite();
    expect(r.allPassed).toBe(true);
  }, 30000);
});
