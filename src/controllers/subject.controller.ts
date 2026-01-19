import type { Request, Response } from "express";
import Subject from "../models/Subject.js";


export const createSubject = async (req: Request, res: Response) => {
    try {
        const { subjects } = req.body;
        subjects.forEach(async (subject: string) => {
            await Subject.create({ 
              name: subject,
              user: req.user?.id});
        });

        res.status(201).json({ message: "Materia creada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la materia" });
    }
};