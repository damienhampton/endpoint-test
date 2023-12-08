import sinon from "sinon";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { myServiceFactory } from "./my-service";
chai.use(sinonChai);

describe("article method", () => {
  context("getArticle(1234)", () => {
    it("should return expected data object", async () => {
      const dataService = sinon
        .stub()
        .withArgs(1234)
        .resolves({
          meta: {
            id: 1234,
          },
          original: {
            headline: "Some title",
          },
          media: {
            images: [{ href: "image1.jpg" }],
          },
        });
      expect(
        await myServiceFactory(dataService).getArticle(1234)
      ).to.deep.equal({
        title: "Some title",
        id: 1234,
        images: [{ src: "image1.jpg" }],
      });

      expect(dataService).to.have.been.calledWith(1234);
    });
  });

  context("getArticle(5678)", () => {
    it("should return expected data object", async () => {
      const dataService = sinon
        .stub()
        .withArgs(1234)
        .resolves({
          meta: {
            id: 5678,
          },
          original: {
            headline: "Some other title",
          },
          media: {
            images: [{ href: "image2.jpg" }, { href: "image3.jpg" }],
          },
        });
      expect(
        await myServiceFactory(dataService).getArticle(5678)
      ).to.deep.equal({
        title: "Some other title",
        id: 5678,
        images: [{ src: "image2.jpg" }, { src: "image3.jpg" }],
      });

      expect(dataService).to.have.been.calledWith(5678);
    });
  });
});
