import { Router } from "express";

import { cheerioRouter } from "./cheerio/apiCheerio";
import { dbTestsRouter } from "./dbTests/apiDbTests";

export const routerV1 = Router();

routerV1.get("/", (req, res) => {
  res.send("Japa Tests Node API");
});


routerV1.use("/cheerio", cheerioRouter);
routerV1.use("/dbtests", dbTestsRouter);
