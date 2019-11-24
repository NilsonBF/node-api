import { RequestHandler } from "express";
import { DbTest } from "../../../db/dbTests";
import { MyTest } from "../../../model/myTest";

export  const apiGetDbTests: RequestHandler = (req, res, next) => {
  DbTest.find().then(
    (data) => {
      console.log(`/dbtests GET status: ${res && res.statusCode} - error:`, null);
      res.json(data.map((item: any) => new MyTest(item)));
    },
    (err) => {
      console.log(`/dbtests GET status: ${res && res.statusCode} - error:`, err);
    }
  );
};
