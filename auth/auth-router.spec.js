const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

// HOOK IN JEST. THIS FUNCTION RUNS BEFORE EVERY TEST IN OUR TEST SUITE.
beforeEach(async () => {
  // RUNNING NEW SEEDS SO FRESH TO DEATH DATA. EVERY TIME A TEST RUNS THE DATA RE-SEEDS.
  await db.seed.run();
});

const testUser = { username: "test", password: "testpassword" };

const existingUser = { username: "testUser", password: "testpassword" };

describe("auth-router", () => {
  describe("POST /register endpoint", () => {
    it("return a status 201", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(testUser);
      expect(res.status).toBe(201);
    });

    it("return a body of type JSON", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(testUser);
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /login endpoint", () => {
    it("return a status 200", async () => {
      const res = await supertest(server)
        .post("/api/auth/login")
        .send(existingUser);
      expect(res.status).toBe(401);
    });

    it("return a body of type JSON", async () => {
      const res = await supertest(server)
        .post("/api/auth/login")
        .send(existingUser);
      expect(res.type).toBe("application/json");
    });
  });
});
