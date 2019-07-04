module.exports = [
  {
    ID: "A01-FY1920",
    Product: {
      Brand: "Boldie",
      Group: "Shampoo 250ml",
      Code: "A01",
      Description: "Drop Your Hair Shampoo"
    },
    TimePeriod: {
      Granularity: "Fiscal Year",
      Period: "FY1920"
    },
    Plan: [
      {
        ID: "A01-NPW",
        PromoType: "Non-Promo Week",
        Frequency: 0,
        Params: {
          ScanUnit: 100,
          BaselineUnit: 100,
          IncrementalUnit: 0,
          IncrementalGIV: 0,
          BaseListPrice: 15,
          TotalCost: 0,
          ScanDealUnitCost: 0,
          TotalBudget: 375,
          FundRate: 0.25,
          NetSufficiency: 375,
          ROI: 0
        }
      },
      {
        ID: "A01-10POFF",
        PromoType: "10% Off",
        Frequency: 0,
        Params: {
          ScanUnit: 120,
          BaselineUnit: 100,
          IncrementalUnit: 20,
          IncrementalGIV: 300,
          BaseListPrice: 15,
          TotalCost: 360,
          ScanDealUnitCost: 3,
          TotalBudget: 450,
          FundRate: 0.25,
          NetSufficiency: 90,
          ROI: 1.83
        }
      },
      {
        ID: "A01-30POFF",
        PromoType: "30% Off",
        Frequency: 0,
        Params: {
          ScanUnit: 300,
          BaselineUnit: 100,
          IncrementalUnit: 200,
          IncrementalGIV: 3000,
          BaseListPrice: 15,
          TotalCost: 2700,
          ScanDealUnitCost: 9,
          TotalBudget: 1125,
          FundRate: 0.25,
          NetSufficiency: -1575,
          ROI: 1.11
        }
      },
      {
        ID: "A01-50POFF",
        PromoType: "50% Off",
        Frequency: 0,
        Params: {
          ScanUnit: 1000,
          BaselineUnit: 100,
          IncrementalUnit: 900,
          IncrementalGIV: 13500,
          BaseListPrice: 15,
          TotalCost: 15000,
          ScanDealUnitCost: 15,
          TotalBudget: 3750,
          FundRate: 0.25,
          NetSufficiency: -11250,
          ROI: 0.9
        }
      }
    ]
  },
  {
    ID: "A02-FY1920",
    Product: {
      Brand: "Boldie",
      Group: "Shampoo 250ml",
      Code: "A02",
      Description: "Scratch Your Sculp Shampoo"
    },
    TimePeriod: {
      Granularity: "Fiscal Year",
      Period: "FY1920"
    },
    Plan: [
      {
        ID: "A02-NPW",
        PromoType: "Non-Promo Week",
        Frequency: 0,
        Params: {
          ScanUnit: 100,
          BaselineUnit: 100,
          IncrementalUnit: 0,
          IncrementalGIV: 0,
          BaseListPrice: 15,
          TotalCost: 0,
          ScanDealUnitCost: 0,
          TotalBudget: 375,
          FundRate: 0.25,
          NetSufficiency: 375,
          ROI: 0
        }
      },
      {
        ID: "A02-10POFF",
        PromoType: "10% Off",
        Frequency: 0,
        Params: {
          ScanUnit: 120,
          BaselineUnit: 100,
          IncrementalUnit: 20,
          IncrementalGIV: 300,
          BaseListPrice: 15,
          TotalCost: 360,
          ScanDealUnitCost: 3,
          TotalBudget: 450,
          FundRate: 0.25,
          NetSufficiency: 90,
          ROI: 1.83
        }
      },
      {
        ID: "A02-30POFF",
        PromoType: "30% Off",
        Frequency: 0,
        Params: {
          ScanUnit: 300,
          BaselineUnit: 100,
          IncrementalUnit: 200,
          IncrementalGIV: 3000,
          BaseListPrice: 15,
          TotalCost: 2700,
          ScanDealUnitCost: 9,
          TotalBudget: 1125,
          FundRate: 0.25,
          NetSufficiency: -1575,
          ROI: 1.11
        }
      },
      {
        ID: "A02-50POFF",
        PromoType: "50% Off",
        Frequency: 0,
        Params: {
          ScanUnit: 1000,
          BaselineUnit: 100,
          IncrementalUnit: 900,
          IncrementalGIV: 13500,
          BaseListPrice: 15,
          TotalCost: 15000,
          ScanDealUnitCost: 15,
          TotalBudget: 3750,
          FundRate: 0.25,
          NetSufficiency: -11250,
          ROI: 0.9
        }
      }
    ]
  }
];
