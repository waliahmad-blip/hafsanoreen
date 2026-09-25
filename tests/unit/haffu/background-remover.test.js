const BackgroundRemover = require('../../../src/services/haffu/tools/background-remover');

describe('BackgroundRemover', () => {
  test('backward-compatible interface', () => {
    expect(BackgroundRemover.service).toBe('Studio Background Refinement');
    expect(BackgroundRemover.price).toBe(5);
    expect(typeof BackgroundRemover.calculateLedger).toBe('function');
  });

  test('published 30-frame tier prices are honored', () => {
    const l = BackgroundRemover.calculateLedger('full_session_bundle_30', 30);
    expect(l.netBeforeTaxCAD).toBe(95);
    expect(l.discountSavingsCAD).toBe(55);
  });

  test('passes the full embedded test suite', async () => {
    const r = await BackgroundRemover.runFullTestSuite();
    expect(r.allPassed).toBe(true);
  }, 30000);
});
