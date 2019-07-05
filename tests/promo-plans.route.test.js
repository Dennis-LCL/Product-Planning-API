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

  it("GET / should return all saved plans.", async () => {
    await insertMockPromoPlans();
    const response = await request(app).get("/promoplans");
    // console.log("Expect: ", mockPromoPlans);
    // console.log("Received: ", response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockPromoPlans);
  });

  it("GET /:planid should return matched plan.", async () => {
    await insertMockPromoPlans();
    const response = await request(app).get("/promoplans/2");
    // console.log("Expect: ", mockPromoPlans);
    // console.log("Received: ", response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(mockPromoPlans[1]);
  });

  it("POST / should auto increment ID and save a new plan.", async () => {
    await insertMockPromoPlans();
    const response = await request(app)
      .post("/promoplans")
      .send(newPlanWithoutPlanID);
    // console.log("Expect: ", newPlan);
    // console.log("Received: ", response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(newPlan);
  });

  it("PUT /:planid should find and update the promo plan.", async () => {
    await insertMockPromoPlans();
    const response = await request(app)
      .put("/promoplans/2")
      .send(newPlanWithoutPlanID);
    console.log("Expect: ", updatedPlan);
    console.log("Received: ", response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject(updatedPlan);
  });
});

const newPlanWithoutPlanID = {
  Name: "Manager Approved Plan",
  PlanDetail: [
    {
      ID: "A01-NPW",
      Frequency: 36
    },
    {
      ID: "A01-10POFF",
      Frequency: 5
    },
    {
      ID: "A01-30POFF",
      Frequency: 10
    },
    {
      ID: "A01-50POFF",
      Frequency: 1
    },
    {
      ID: "A02-NPW",
      Frequency: 36
    },
    {
      ID: "A02-10POFF",
      Frequency: 5
    },
    {
      ID: "A02-30POFF",
      Frequency: 10
    },
    {
      ID: "A02-50POFF",
      Frequency: 1
    }
  ]
};

const newPlan = {
  PlanID: 3,
  Name: "Manager Approved Plan",
  PlanDetail: [
    {
      ID: "A01-NPW",
      Frequency: 36
    },
    {
      ID: "A01-10POFF",
      Frequency: 5
    },
    {
      ID: "A01-30POFF",
      Frequency: 10
    },
    {
      ID: "A01-50POFF",
      Frequency: 1
    },
    {
      ID: "A02-NPW",
      Frequency: 36
    },
    {
      ID: "A02-10POFF",
      Frequency: 5
    },
    {
      ID: "A02-30POFF",
      Frequency: 10
    },
    {
      ID: "A02-50POFF",
      Frequency: 1
    }
  ]
};

const updatedPlan = {
  PlanID: 2,
  Name: "Manager Approved Plan",
  PlanDetail: [
    {
      ID: "A01-NPW",
      Frequency: 36
    },
    {
      ID: "A01-10POFF",
      Frequency: 5
    },
    {
      ID: "A01-30POFF",
      Frequency: 10
    },
    {
      ID: "A01-50POFF",
      Frequency: 1
    },
    {
      ID: "A02-NPW",
      Frequency: 36
    },
    {
      ID: "A02-10POFF",
      Frequency: 5
    },
    {
      ID: "A02-30POFF",
      Frequency: 10
    },
    {
      ID: "A02-50POFF",
      Frequency: 1
    }
  ]
};
