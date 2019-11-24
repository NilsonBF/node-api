import { Router } from "express";

import { jsonParser } from "../general/bodyParser";

import { apiGetDbTests } from "./apiGetDbTests";
import { apiPostDbTests } from "./apiPostDbTests";

export const dbTestsRouter = Router();

dbTestsRouter.route("/")
  .get(apiGetDbTests)
  .post(jsonParser, apiPostDbTests)
