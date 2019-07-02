module.exports = [
  {
    product: {
      brand: "Boldie",
      group: "Shampoo 250ml",
      code: "A01",
      description: "Drop Your Hair Shampoo"
    },
    plan: [
      {
        planId: "A01-NPW",
        promoType: "Non-Promo Week",
        frequency: 0,
        kpis: {
          scanUnit: 100,
          baselineUnit: 100,
          incrementalUnit: 0,
          incrementalGIV: 0,
          baseListPrice: 15,
          totalCost: 0,
          scanDealUnitCost: 0,
          totalBudget: 375,
          fundRate: 0.25,
          netSufficiency: 375,
          roi: 0
        }
      },
      {
        planId: "A01-10% Off",
        promoType: "10% Off",
        frequency: 0,
        kpis: {
          scanUnit: 120,
          baselineUnit: 100,
          incrementalUnit: 20,
          incrementalGIV: 300,
          baseListPrice: 15,
          totalCost: 360,
          scanDealUnitCost: 3,
          totalBudget: 450,
          fundRate: 0.25,
          netSufficiency: 90,
          roi: 1.83
        }
      },
      {
        planId: "A01-30% Off",
        promoType: "30% Off",
        frequency: 0,
        kpis: {
          scanUnit: 300,
          baselineUnit: 100,
          incrementalUnit: 200,
          incrementalGIV: 3000,
          baseListPrice: 15,
          totalCost: 2700,
          scanDealUnitCost: 9,
          totalBudget: 1125,
          fundRate: 0.25,
          netSufficiency: -1575,
          roi: 1.11
        }
      },
      {
        planId: "A01-50% Off",
        promoType: "50% Off",
        frequency: 0,
        kpis: {
          scanUnit: 1000,
          baselineUnit: 100,
          incrementalUnit: 900,
          incrementalGIV: 13500,
          baseListPrice: 15,
          totalCost: 15000,
          scanDealUnitCost: 15,
          totalBudget: 3750,
          fundRate: 0.25,
          netSufficiency: -11250,
          roi: 0.9
        }
      }
    ]
  },

  {
    product: {
      brand: "Boldie",
      group: "Shampoo 250ml",
      code: "A02",
      description: "Scratch Your Sculp Shampoo"
    },
    plan: [
      {
        planId: "A02-NPW",
        promoType: "Non-Promo Week",
        frequency: 0,
        kpis: {
          scanUnit: 100,
          baselineUnit: 100,
          incrementalUnit: 0,
          incrementalGIV: 0,
          baseListPrice: 15,
          totalCost: 0,
          scanDealUnitCost: 0,
          totalBudget: 375,
          fundRate: 0.25,
          netSufficiency: 375,
          roi: 0
        }
      },
      {
        planId: "A02-10% Off",
        promoType: "10% Off",
        frequency: 0,
        kpis: {
          scanUnit: 120,
          baselineUnit: 100,
          incrementalUnit: 20,
          incrementalGIV: 300,
          baseListPrice: 15,
          totalCost: 360,
          scanDealUnitCost: 3,
          totalBudget: 450,
          fundRate: 0.25,
          netSufficiency: 90,
          roi: 1.83
        }
      },
      {
        planId: "A02-30% Off",
        promoType: "30% Off",
        frequency: 0,
        kpis: {
          scanUnit: 300,
          baselineUnit: 100,
          incrementalUnit: 200,
          incrementalGIV: 3000,
          baseListPrice: 15,
          totalCost: 2700,
          scanDealUnitCost: 9,
          totalBudget: 1125,
          fundRate: 0.25,
          netSufficiency: -1575,
          roi: 1.11
        }
      },
      {
        planId: "A02-50% Off",
        promoType: "50% Off",
        frequency: 0,
        kpis: {
          scanUnit: 1000,
          baselineUnit: 100,
          incrementalUnit: 900,
          incrementalGIV: 13500,
          baseListPrice: 15,
          totalCost: 15000,
          scanDealUnitCost: 15,
          totalBudget: 3750,
          fundRate: 0.25,
          netSufficiency: -11250,
          roi: 0.9
        }
      }
    ]
  }
];
