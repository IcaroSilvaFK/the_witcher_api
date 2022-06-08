import cors from "cors";
import "dotenv/config";
import express from "express";
// import { ErrorMiddleware } from "./middlewares/error.middleware";
// import { NotFoundRoute } from "./routes/notfound.route";

import { router } from "./routes/routes";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(router);
// app.use(ErrorMiddleware);
// app.use(NotFoundRoute);

app.listen(port, () => {
  console.log(
    `server running in port http://localhost:${process.env.PORT || port}`
  );
});
