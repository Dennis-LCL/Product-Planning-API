const request = require("supertest");
const app = require("../src/app");
const { MongoClient } = require("mongodb");
const mockPromoParams = require("./promo-params.mockdata");

describe("routes/promoparams", () => {
  let connection;
  let db;

  const getMockPromoParams = () => {
    return mockPromoParams.map(promoParam => {
      return { ...promoParam };
    });
  };

  const insertMockPromoParams = async () => {
    const PromoParamCollection = await db.collection("promoparams");
    const mockData = getMockPromoParams();
    await PromoParamCollection.insertMany(mockData);
  };

  beforeAll(async () => {
    dbURIArray = global.__MONGO_URI__.split("/");
    dbName = dbURIArray[dbURIArray.length - 1];
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
    // console.log(`Connected to DB: ${dbName}.`);
    // console.log("Expect: ", mockPromoParams);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await connection.close();
    await db.close();
  });

  beforeEach(async () => {
    await db.dropDatabase();
  });

  it("GET / should return promo params for all Product-PromoType combinations.", async () => {
    await insertMockPromoParams();
    const response = await request(app).get("/promoparams");
    console.log("Expect: ", mockPromoParamsForFrontEnd);
    console.log("Received: ", response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockPromoParamsForFrontEnd);
  });
});

const mockPromoParamsForFrontEnd = [
  {
    ID: "A01-NPW",
    KPIs: {
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
    KPIs: {
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
    KPIs: {
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
    KPIs: {
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
  },
  {
    ID: "A02-NPW",
    KPIs: {
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
    KPIs: {
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
    KPIs: {
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
    KPIs: {
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
  // {
  //   ID: "A03-NPW",
  //   KPIs: {
  //     ScanUnit: 100,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 0,
  //     IncrementalGIV: 0,
  //     BaseListPrice: 15,
  //     TotalCost: 0,
  //     ScanDealUnitCost: 0,
  //     TotalBudget: 375,
  //     FundRate: 0.25,
  //     NetSufficiency: 375,
  //     ROI: 0
  //   }
  // },
  // {
  //   ID: "A03-10POFF",
  //   KPIs: {
  //     ScanUnit: 120,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 20,
  //     IncrementalGIV: 300,
  //     BaseListPrice: 15,
  //     TotalCost: 360,
  //     ScanDealUnitCost: 3,
  //     TotalBudget: 450,
  //     FundRate: 0.25,
  //     NetSufficiency: 90,
  //     ROI: 1.83
  //   }
  // },
  // {
  //   ID: "A03-30POFF",
  //   KPIs: {
  //     ScanUnit: 300,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 200,
  //     IncrementalGIV: 3000,
  //     BaseListPrice: 15,
  //     TotalCost: 2700,
  //     ScanDealUnitCost: 9,
  //     TotalBudget: 1125,
  //     FundRate: 0.25,
  //     NetSufficiency: -1575,
  //     ROI: 1.11
  //   }
  // },
  // {
  //   ID: "A03-50POFF",
  //   KPIs: {
  //     ScanUnit: 1000,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 900,
  //     IncrementalGIV: 13500,
  //     BaseListPrice: 15,
  //     TotalCost: 15000,
  //     ScanDealUnitCost: 15,
  //     TotalBudget: 3750,
  //     FundRate: 0.25,
  //     NetSufficiency: -11250,
  //     ROI: 0.9
  //   }
  // }
];
