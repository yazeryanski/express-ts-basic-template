import "dotenv/config";
import express from "express";
import "express-async-errors";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running at port: ", PORT);
});
