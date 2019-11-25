import { Router } from "express";

import { jsonParser } from "../general/bodyParser";

import { apiPostCheerio } from "./apiPostCheerio";

export const cheerioRouter = Router();

cheerioRouter.route("/")
  .post(jsonParser, apiPostCheerio)
