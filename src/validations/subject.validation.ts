import { body } from "express-validator";

export const subjectRules = [
  body("subjects")
    .notEmpty()
    .withMessage("Tiene que enviar al menos una materia"),
  body("subjects")
    .isArray()
    .custom((value) => {
      if (value.length === 0) {
        throw new Error("Debe enviar al menos una materia");
      }
      return true;
    })
    .withMessage("Debe enviar al menos una materia"),
  body("subjects.*.name")
    .notEmpty()
    .withMessage("El nombre de la materia es requerido"),
  body("subjects.*.name")
    .isLength({ min: 3 })
    .withMessage("El nombre de la materia debe tener al menos 3 caracteres"),
];