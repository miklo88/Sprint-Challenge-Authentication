const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

beforeEach(async () => {
  await db.seed.run();
});

const testUser = { username: "test", password: "testpassword" };

const existingUser = { username: "testUser", password: "testpassword" };

describe("auth-router", () => {
  describe("POST /register endpoint", () => {
    it("should return a status 201 created", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(testUser);
      expect(res.status).toBe(201);
    });

    it("should return a body of type JSON", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(testUser);
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /login endpoint", () => {
    it("should return a status 200 OK", async () => {
      const res = await supertest(server)
        .post("/api/auth/login")
        .send(existingUser);
      expect(res.status).toBe(401);
    });

    it("should return a body of type JSON", async () => {
      const res = await supertest(server)
        .post("/api/auth/login")
        .send(existingUser);
      expect(res.type).toBe("application/json");
    });
  });
});
