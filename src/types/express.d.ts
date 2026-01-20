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
export interface Class {
  day: string;
  subject: string;
  startTime: string;
  endTime: string;
  teacher: string;
  classType: string;
  classroom: string;
  building: string;
  user: User;
}
