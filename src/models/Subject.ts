import { Schema, model } from "mongoose";

const subjectSchema = new Schema({
    name: {
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
    collection: "subjects",
});

export default model("Subject", subjectSchema);