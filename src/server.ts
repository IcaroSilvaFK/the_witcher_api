import cors from "cors";
import "dotenv/config";
import express from "express";
import { IError } from "./interfaces/IError.interface";
import { ErrorMiddleware } from "./middlewares/error.middleware";
import { NotFoundRoute } from "./routes/notfound.route";

import { router } from "./routes/routes";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(NotFoundRoute);
app.use(ErrorMiddleware);

app.listen(port, () => {
  console.log(
    `server running in port http://localhost:${process.env.PORT || port}`
  );
});
