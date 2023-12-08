import { ArticleDataServiceInterface, MyServiceInterface } from "./interfaces";
import { Article } from "./models";

export const myServiceFactory = (
  dataService: ArticleDataServiceInterface
): MyServiceInterface => ({
  async getArticle(id: number): Promise<Article | undefined> {
    const articleData = await dataService(id);
    if (!articleData) {
      return undefined;
    }
    return {
      title: articleData.original.headline,
      id: articleData.meta.id,
      images: articleData.media.images.map((image) => ({ src: image.href })),
    };
  },
});
