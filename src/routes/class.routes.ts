import express from "express";
import { validate } from "../middlewares/validate.js";
import { createClassRules } from "../validations/class.validatons.js";
import { createClass, getClassById, getClasses, deleteClass, editClass } from "../controllers/class.controller.js";
const router = express.Router();

// Crear clases, editar clase, borrar clase, ver una clase, ver todas las clases
router.post("/", createClassRules, validate, createClass);
router.get("/", getClasses);
router.get("/:id", getClassById);
router.put("/:id", createClassRules, validate, editClass);
router.delete("/:id", deleteClass);

export default router;
