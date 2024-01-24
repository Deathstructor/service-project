import mongoose, { Mongoose } from "mongoose";

const HeistSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    },
    tactic: {
        type: String,
        require: false
    },
    job: [{
        job_title: {
            type: String,
            require: true
        },
        available: {
            type: String,
            require: true
        }
    }]
})

export const HeistModel = mongoose.model("Heist", HeistSchema);