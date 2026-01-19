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
  body("subjects.*")
    .notEmpty()
    .withMessage("El nombre de la materia es requerido"),
];
