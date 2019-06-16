const request = require("supertest");
const chai = require("chai");
const { expect, assert } = chai;
const colors = require("colors");
const customerApi = require("../api/customer");
const app = require("../app");
const testData  = require("./data");

colors.setTheme({
  title: "yellow",
  error: "red",
  info: "blue"
});


describe("[Connected Vehicles TEST]", () => {
  // after(function() {
  //   return finder.flush();
  // });

  for (const customer of testData) {
    describe(customer.name, function() {
      before(function() {
        // return finder.flush();
      });
      it("Should load customers", done => {
        request(app)
          .post("/v1/customer")
          .expect(200)
          .send(customer)
          .end((err, res) => {
            expect(res.body.status).to.equal(true);
            done();
          });
      });
      // it("return correctly", done => {
      //   request(app)
      //     .post("/ad_ssp")
      //     .expect(200)
      //     .send(v.req)
      //     .end((err, res) => {
      //       expect(res.body).to.deep.equal(v.res);
      //       done();
      //     });
      // });
    });
  }




  
});