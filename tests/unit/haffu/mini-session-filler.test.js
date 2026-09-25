const MiniSessionFiller = require('../../../src/services/haffu/tools/mini-session-filler');

describe('MiniSessionFiller', () => {
  test('backward-compatible interface', () => {
    expect(typeof MiniSessionFiller.generateSlotSchedule).toBe('function');
    expect(typeof MiniSessionFiller.calculateEventLedger).toBe('function');
    expect(Object.keys(MiniSessionFiller.SIGNATURE_POPUP_EVENTS).length).toBeGreaterThan(0);
  });

  test('slot scheduler produces capacity-aware schedule', () => {
    const s = MiniSessionFiller.generateSlotSchedule({});
    expect(s.totalSlots).toBeGreaterThan(0);
  });

  test('passes the full embedded test suite', async () => {
    const r = await MiniSessionFiller.runFullTestSuite();
    expect(r.allPassed).toBe(true);
  }, 30000);
});
