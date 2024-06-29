import Responder from "@/services/Responder/Responder";
import express from "express";

const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
  return Responder.success(res, "I am healthy");
});

export default healthRouter;
