import type { Request, Response } from "express";
import Subject from "../models/Subject.js";
import { error } from "node:console";


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

export const getSubjects = async (req: Request, res: Response) => {
    try {
        const subjects = await Subject.find({ user: req.user?.id }).sort({
            name: 1,
        });
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las materias" });
    }
};

export const editSubject = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const { name } = req.body;

        const subject = await Subject.findByIdAndUpdate(id, { name }, { new: true });
        res.status(200).json({ message: "Materia editada exitosamente", subject });
    }catch (err){
        res.status(500).json({ message: "Error al editar la materia", error: err });
    }
}
