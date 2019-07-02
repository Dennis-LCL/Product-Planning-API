const request = require("supertest");
const app = require("../src/app");
const { MongoClient } = require("mongodb");
const mockProductPlans = require("./productplan.mockdata");
const mockForecastAssumptions = require("./forecast-assumptions.mockdata");

describe("routes/forecastassumptions", () => {
  let connection;
  let db;

  const getMockProductPlans = () => {
    return mockProductPlans.map(plan => {
      return { ...plan };
    });
  };

  const insertMockProductPlans = async () => {
    const ProductPlanCollection = await db.collection("productplans");
    const mockData = getMockProductPlans();
    await ProductPlanCollection.insertMany(mockData);
  };

  beforeAll(async () => {
    dbURIArray = global.__MONGO_URI__.split("/");
    dbName = dbURIArray[dbURIArray.length - 1];
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
    console.log(`Connected to DB: ${dbName}.`);
    console.log(mockForecastAssumptions);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await connection.close();
    await db.close();
  });

  beforeEach(async () => {
    await db.dropDatabase();
  });

  it("GET / should return forecast assumptions for all Product-PromoType combinations.", async () => {
    const response = await request(app).get("/forecastassumptions");
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockForecastAssumptions);
  });
});