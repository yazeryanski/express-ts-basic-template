import Responder from "@/services/Responder/Responder";
import Express from "express";

export function errorHandler(
  err: Express.Errback,
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  console.error("Internal Error: ", err);

  return Responder.fail(res, ["Internal Server Error"], 500);
}
