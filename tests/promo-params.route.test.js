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

  it.only("GET / should return promo params for all Product-PromoType combinations.", async () => {
    await insertMockPromoParams();
    const response = await request(app).get("/promoparams");
    console.log(mockPromoParams);
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockPromoParams);
  });

  it("GET /:pptid should return forecast assumption for selected Product-PromoType combination.", async () => {
    await insertMockProductPlans();
    const param = mockPromoParams[1].ID;
    console.log(param);
    const response = await request(app).get(`/forecastassumptions/${param}`);
    // console.log("Expect: ", mockPromoParams[1]);
    // console.log("Receive: ", response.body);
    expect(response.status).toEqual(200);
    // expect(response.body).toMatchObject(mockPromoParams[1]);
  });
});
