import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    role: {
        type: [String],
        required: true
    },
    PersonPfp: {
        type: String
    },
    works: {
        type: [Object],
        required: true
    }
});

const person = mongoose.model("person",personSchema);
export { person };