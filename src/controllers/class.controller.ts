import { response, type Request, type Response } from "express";
import type { Class as TypeClass } from "../types/express.js";
import Class from "../models/Class.js";

export const createClass = (req: Request, res: Response) => {
  // Nos vendran estos datos (day, subject, startTime, endTime, teacher, classType, classroom, building) pero en una variable que sera array de objetos
  try {
    const { classes } = req.body;
    const userId = req.user?.id;
    classes.forEach(async (classItem: TypeClass) => {
      // Aqui se deberia guardar en la base de datos
      await Class.create({
        day: classItem.day,
        subject: classItem.subject,
        startTime: classItem.startTime,
        endTime: classItem.endTime,
        teacher: classItem.teacher,
        classType: classItem.classType,
        classroom: classItem.classroom,
        building: classItem.building,
        user: userId,
      });
      res.status(201).json({ message: "Clase creada exitosamente" });
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la clase", error });
  }
};

export const getClasses =  async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const classes = await Class.find({ user: userId });
    return res.status(200).json(classes);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener las clases", error });
  }
}

export const getClassById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    const classById = await Class.findById(id);
    if (!classById) {
      return res.status(404).json({ message: "Clase no encontrada" });
    }
    if (classById.user.toString() !== userId) {
      return res.status(403).json({ message: "No tienes permiso para acceder a esta clase" });
    }
    return res.status(200).json(classById);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener la clase", error });
  }
}
