import express from "express";
import { createSubject } from "../controllers/subject.controller.js";
import { subjectRules } from "../validations/subject.validation.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post("/", subjectRules, validate, createSubject);

export default router;