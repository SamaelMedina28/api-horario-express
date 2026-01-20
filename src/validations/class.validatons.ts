import { body } from "express-validator";
import Subject from "../models/Subject.js";
export const createClassRules = [
  /* *
   * day, subject, startTime, endTime, teacher, classType, classroom, building, user
   *
   **/
  body("classes")
    .isArray({ min: 1 })
    .withMessage("Debe enviar al menos una clase"),
  body("classes.*.day")
    .isIn(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"])
    .withMessage("El día no es valido"),
  body("classes.*.subject").notEmpty().withMessage("La materia es requerida"),
  body("classes.*.subject")
    .custom(async(value) => {
      const subject = await Subject.findById(value);
      if (!subject) {
        throw new Error("La materia no existe");
      }
    })
    .withMessage("La materia no existe"),
  body("classes.*.startTime")
    .notEmpty()
    .withMessage("La hora de inicio es requerida"),
  body("classes.*.startTime")
    .isTime({
      hourFormat: "hour24",
    })
    .withMessage("La hora de inicio no es valida"),
  body("classes.*.endTime")
    .notEmpty()
    .withMessage("La hora de fin es requerida"),
  body("classes.*.endTime")
    .isTime({
      hourFormat: "hour24",
    })
    .withMessage("La hora de fin no es valida"),
  body("classes.*.teacher").notEmpty().withMessage("El profesor es requerido"),
  body("classes.*.classType")
    .notEmpty()
    .withMessage("El tipo de clase es requerido"),
  body("classes.*.classroom").notEmpty().withMessage("El aula es requerida"),
  body("classes.*.building").notEmpty().withMessage("El edificio es requerido")
];
