import { body } from "express-validator";

export const subjectRules = [
    body("subjects").notEmpty().withMessage("Tiene que enviar al menos una materia"),
    body("subjects").isArray().withMessage("Debe enviar un array de materias"),
    body("subjects.*.name").notEmpty().withMessage("El nombre de la materia es requerido"),
    body("subjects.*.name").isLength({ min: 3 }).withMessage("El nombre de la materia debe tener al menos 3 caracteres"),
];