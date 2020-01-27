const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("jokes-router", () => {
  describe("/jokes endpoint", () => {
    it("return a status 401", async () => {
      const res = await supertest(server).get("/api/jokes");
      expect(res.status).toBe(401);
    });

    it("return a body of type JSON", async () => {
      const res = await supertest(server).get("/api/jokes");
      expect(res.type).toBe("application/json");
    });
  });
});
