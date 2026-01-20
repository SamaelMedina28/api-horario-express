import { Schema, model } from "mongoose";

const classSchema = new Schema({
    day: {
        type: String,
        enum: [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
        ],
        required: true,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    classType: {
        type: String,
        required: true,
    },
    classroom: {
        type: String,
        required: true,
    },
    building: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
    collection: "classes",
});

export default model("Class", classSchema);
