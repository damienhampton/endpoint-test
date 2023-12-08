import { MyServiceInterface } from "./interfaces";
import express, { Express } from "express";

export function createApp(service: MyServiceInterface): Express {
  const app = express();

  app.get("/article/:id", async (req, res) => {
    res.json(await service.getArticle(parseInt(req.params.id, 10)));
  });

  return app;
}
