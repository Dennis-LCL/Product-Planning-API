const request = require("supertest");
const app = require("../src/app");
const { MongoClient } = require("mongodb");
const PromoPlanCollection = require("../src/models/promo-plan.model");
const mockPromoPlans = require("./promo-plans.mockdata");

describe("routes/products", () => {
  let connection;
  let db;

  const getMockPromoPlans = () => {
    return mockPromoPlans.map(plan => {
      return { ...plan };
    });
  };

  const insertMockPromoPlans = async () => {
    const PromoPlans = await db.collection("promoplans");
    const mockData = getMockPromoPlans();
    await PromoPlans.insertMany(mockData);
  };

  beforeAll(async () => {
    dbURIArray = global.__MONGO_URI__.split("/");
    dbName = dbURIArray[dbURIArray.length - 1];
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await connection.close();
    await db.close();
  });

  beforeEach(async () => {
    await db.dropDatabase();
  });

  it("GET / should return all products.", async () => {
    await insertMockPromoPlans();
    const response = await request(app).get("/promoplans");
    console.log("Expect: ", mockPromoPlans);
    console.log("Received: ", response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockPromoPlans);
  });
});
