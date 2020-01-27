const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("jokes-router", () => {
  describe("/jokes endpoint", () => {
    it("should return a status 401 Unauthorized", async () => {
      const res = await supertest(server).get("/api/jokes");
      expect(res.status).toBe(401);
    });

    it("should return a body of type JSON", async () => {
      const res = await supertest(server).get("/api/jokes");
      expect(res.type).toBe("application/json");
    });
  });
});
