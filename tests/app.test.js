const app = require("../src/app");
const request = require("supertest");
const { MongoClient } = require("mongodb");
const mockProductPlans = require("./product-plan.mockdata");
// console.log("mock data before insert into db: ", mockProductPlans);

describe("Product-Planning API", () => {
  let connection;
  let db;

  const getMockProductPlans = () => {
    return mockProductPlans.map(plan => {
      return { ...plan };
    });
  };

  const insertMockProductPlans = async () => {
    const ProductPlanCollection = await db.collection("product-plans");
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
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await connection.close();
    await db.close();
  });

  beforeEach(async () => {
    await db.dropDatabase();
  });

  it("GET /greetings should return 'Happy Planning!'", async () => {
    const response = await request(app).get("/greetings");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Happy Planning!");
  });

  it("GET / should return all product-plans in db.", async () => {
    await insertMockProductPlans();
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockProductPlans);
  });
});
