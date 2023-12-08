import { Article, WPArticle } from "./models";

export interface MyServiceInterface {
  getArticle(id: number): Promise<Article | undefined>;
}

export type ArticleDataServiceInterface = (
  id: number
) => Promise<WPArticle | undefined>;
