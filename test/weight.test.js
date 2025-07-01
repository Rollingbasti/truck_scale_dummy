const request = require("supertest");
const app = require("../server");

describe("GET /weights", () => {
    it("should return a weight", async () => {
        return request(app)
            .get("/weight")
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
});