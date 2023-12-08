import { expect } from "chai";
import { articleDataService } from "./article-data-service";

describe("article method", () => {
  context("articleDataService(1234)", () => {
    it("should return expected data object", async () => {
      expect(await articleDataService(1234)).to.deep.equal({
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
    });
  });

  context("articleDataService(5678)", () => {
    it("should return expected data object", async () => {
      expect(await articleDataService(5678)).to.deep.equal({
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
    });
  });
});
