const app = require("../app");
const request = require("supertest");

let server;
beforeAll((done) => {
  server = app.listen(3000, () => {
    console.log("Server running successfully on port 3000");
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log("Server closed");
    done();
  });
});
describe("GET /", () => {
  it("Responds with JSON", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toMatchObject({ message: "Gotten successfully!" });
  });
});
