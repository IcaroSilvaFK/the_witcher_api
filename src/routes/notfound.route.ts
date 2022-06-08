import { Request, Response } from "express";

export function NotFoundRoute(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found!",
  });
}
