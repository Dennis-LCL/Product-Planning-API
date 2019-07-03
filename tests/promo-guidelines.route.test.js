const request = require("supertest");
const app = require("../src/app");
const { MongoClient } = require("mongodb");
const promoGuidelineCollection = require("../src/models/promo-guideline.model");
const mockPromoGuidelines = require("./promo-guidelines.mockdata");

describe("routes/promo-guidelines", () => {
  let connection;
  let db;

  const getMockPromoGuidelines = () => {
    return mockPromoGuidelines.map(product => {
      return { ...product };
    });
  };

  const insertMockPromoGuidelines = async () => {
    const PromoGuidelines = await db.collection("promoguidelines");
    const mockData = getMockPromoGuidelines();
    await PromoGuidelines.insertMany(mockData);
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

  it("GET / should return all promo guideines.", async () => {
    await insertMockPromoGuidelines();
    const response = await request(app).get("/promoguidelines");
    console.log(mockPromoGuidelines);
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockPromoGuidelines);
  });
});
