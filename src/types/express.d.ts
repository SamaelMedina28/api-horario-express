// types/express.d.ts
import { JwtPayload } from "jsonwebtoken";

interface User extends JwtPayload {
  id: string;
  email?: string;
  isNew?: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export {};
