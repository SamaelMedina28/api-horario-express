import express from "express";
import { createSubject, editSubject, getSubjects, deleteSubject } from "../controllers/subject.controller.js";
import { editSubjectRules, subjectRules } from "../validations/subject.validation.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post("/", subjectRules, validate, createSubject);
router.get("/", getSubjects);
router.put("/:id", editSubjectRules, validate, editSubject);
router.delete("/:id", deleteSubject);

export default router;
