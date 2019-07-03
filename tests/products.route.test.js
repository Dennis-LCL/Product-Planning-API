const request = require("supertest");
const app = require("../src/app");
const { MongoClient } = require("mongodb");
const ProductCollection = require("../src/models/product.model");
const mockProducts = require("./products.mockdata");

describe("routes/products", () => {
  let connection;
  let db;

  const getMockProducts = () => {
    return mockProducts.map(product => {
      return { ...product };
    });
  };

  const insertMockProducts = async () => {
    const Products = await db.collection("products");
    const mockData = getMockProducts();
    await Products.insertMany(mockData);
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
    await insertMockProducts();
    const response = await request(app).get("/products");
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockProducts);
  });
});
