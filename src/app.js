import "dotenv/config";
import { db } from "./db";
import app from "./config/express";

const port = process.env.port || 3000;

db.connect()
  .then((obj) => {
    app.listen(port, () => {
      obj.done();
      console.log(`starting on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
