const PresetSeller = require('../../../src/services/haffu/tools/preset-seller');

describe('PresetSeller', () => {
  test('presets catalog and bundles present', () => {
    expect(PresetSeller.SIGNATURE_PRESETS_CATALOG.length).toBeGreaterThanOrEqual(3);
    expect(PresetSeller.PRESET_COLLECTION_BUNDLES.length).toBe(3);
  });

  test('cart ledger applies 13% HST', () => {
    const presets = PresetSeller.getAllPresets();
    const ledger = PresetSeller.calculateCartLedger([presets[0].id], null, presets);
    expect(ledger.totalChargedCAD).toBeCloseTo(ledger.netBeforeTaxCAD * 1.13, 2);
  });

  test('passes the full embedded test suite', async () => {
    const r = await PresetSeller.runFullTestSuite();
    expect(r.allPassed).toBe(true);
  }, 30000);
});
