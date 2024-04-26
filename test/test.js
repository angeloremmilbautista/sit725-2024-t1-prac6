var expect  = require("chai").expect;
var request = require("request");

describe("POST /api/cards", () => {
  it("should add a new card", (done) => {
    chai
      .request(app)
      .post("/api/cards")
      .send({
        title: "Test Card",
        subTitle: "Test Subtitle",
        path: "test.jpg",
        description: "Test Description",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});

describe("GET /api/cards", () => {
  it("should get all cards", (done) => {
    chai
      .request(app)
      .get("/api/cards")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
