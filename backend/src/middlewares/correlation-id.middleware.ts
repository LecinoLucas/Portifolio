import type { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

declare global {
  namespace Express {
    interface Request {
      correlationId: string;
    }
  }
}

export function middlewareCorrelationId(req: Request, res: Response, next: NextFunction): void {
  const headerId = req.header("X-Correlation-Id");
  const correlationId = headerId && headerId.trim().length > 0 ? headerId : uuidv4();

  req.correlationId = correlationId;
  res.setHeader("X-Correlation-Id", correlationId);

  next();
}
