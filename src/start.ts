import { articleDataService } from "./external/article-data-service";
import { myServiceFactory } from "./my-service";
import { createApp } from "./app";

const myService = myServiceFactory(articleDataService);
const app = createApp(myService);

app.listen(3000);
