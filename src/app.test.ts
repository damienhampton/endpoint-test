import sinon from "sinon";
import request from "supertest";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { MyServiceInterface } from "./interfaces";
import { createApp } from "./app";
chai.use(sinonChai);

describe("article endpoint", () => {
  context("get /article/1234", () => {
    it("should return expected data object", async () => {
      const myService: MyServiceInterface = {
        getArticle: sinon
          .stub()
          .withArgs(1234)
          .resolves({
            title: "Some title",
            id: 1234,
            images: [{ src: "image1.jpg" }],
          }),
      };

      await request(createApp(myService))
        .get("/article/1234")
        .expect(200)
        .expect({
          title: "Some title",
          id: 1234,
          images: [{ src: "image1.jpg" }],
        });

      expect(myService.getArticle).to.have.been.calledWith(1234);
    });
  });
  context("get /article/5678", () => {
    it("should return expected data object", async () => {
      const myService: MyServiceInterface = {
        getArticle: sinon
          .stub()
          .withArgs(5678)
          .resolves({
            title: "Some other title",
            id: 5678,
            images: [{ src: "image2.jpg" }, { src: "image3.jpg" }],
          }),
      };

      await request(createApp(myService))
        .get("/article/5678")
        .expect(200)
        .expect({
          title: "Some other title",
          id: 5678,
          images: [{ src: "image2.jpg" }, { src: "image3.jpg" }],
        });

      expect(myService.getArticle).to.have.been.calledWith(5678);
    });
  });
});
