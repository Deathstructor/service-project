import mongoose, { Mongoose } from "mongoose";
import { HeistModel } from "./schemas";
import { name, difficulty, tactic, job } from "./data.json"

const uri = "mongodb+srv://chastainpaul:uqja15ElJY5hRZSf@heistnetdb.gtpzx.mongodb.net/HeistnetDB?retryWrites=true&w=majority";

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

Run()
export async function Run() {
    try {
        mongoose.connect(uri).then(() => {
            console.log(`Successfully connected to database ${mongoose.connection.name}`);
        })

        await HeistModel.collection.drop();
        if (await HeistModel.exists() == null) {
            for (let i = 0; i < name.length; i++) {
                let jobArr = [];

                for (let j = 0; j < job.title.length; j++) {
                    jobArr[j] = {
                        job_title: job.title[j],
                        available: job.available[randomMinMax(0, job.available.length - 1)]
                    }
                }

                HeistModel.create({
                    name: name[i],
                    difficulty: difficulty[randomMinMax(0, difficulty.length - 1)],
                    tactic: tactic[randomMinMax(0, tactic.length - 1)],
                    job: jobArr
                });
            }
        }

    } catch (error) {
        console.log(error);
    }
}