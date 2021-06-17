import { Application } from "./deps.ts";
import { router } from "./Routes/Router.ts";
import { oakCors } from "./deps.ts";

const app = new Application();
const port: number = 8000;

app.use(
  oakCors({
    origin: '*'
  })
);

addEventListener("fetch", ()=>{
  app.use(router.routes());
  app.use(router.allowedMethods());
});
console.log("running on port ", port);
// await app.listen({ port: port });
