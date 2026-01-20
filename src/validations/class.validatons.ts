import { body } from "express-validator";
export const createClassRules = [
  /* *
   * day, subject, startTime, endTime, teacher, classType, classroom, building, user
   *
   **/
  body("day")
    .isIn(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"])
    .withMessage("El día no es valido"),
  body("subject").notEmpty().withMessage("La materia es requerida"),
  body("startTime").notEmpty().withMessage("La hora de inicio es requerida"),
  body("startTime").isTime({
    hourFormat: 'hour24'
  }).withMessage("La hora de inicio no es valida"),
  body("endTime").notEmpty().withMessage("La hora de fin es requerida"),
  body("endTime").isTime({
    hourFormat: 'hour24'
  }).withMessage("La hora de fin no es valida"),
  body("teacher").notEmpty().withMessage("El profesor es requerido"),
  body("classType").notEmpty().withMessage("El tipo de clase es requerido"),
  body("classroom").notEmpty().withMessage("El aula es requerida"),
  body("building").notEmpty().withMessage("El edificio es requerido"),
  body("user").notEmpty().withMessage("El usuario es requerido"),
];
