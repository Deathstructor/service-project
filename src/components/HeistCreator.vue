<script setup>
import Select from './Select.vue';
import { ref, toRaw } from 'vue';
import { MongoClient } from 'mongodb';
import router from '@/router';

const uri = "mongodb+srv://chastainpaul:uqja15ElJY5hRZSf@heistnetdb.gtpzx.mongodb.net/HeistnetDB?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const database = client.db("HeistnetDB");
const collection = database.collection("heists");

const optsTact = [
    { val: "", text: "Choose tactic", disabled: true, selected: true },
    { val: "ANY", text: "Any" },
    { val: "LOUD", text: "Loud" },
    { val: "STEALTH", text: "Stealth" }
];
let filterTactic = ref("");

const optsDiff = [
    { val: "", text: "Choose difficulty", disabled: true, selected: true },
    { val: "EASY", text: "Easy" },
    { val: "NORMAL", text: "Normal" },
    { val: "HARD", text: "Hard" },
    { val: "VERY HARD", text: "Very Hard" },
    { val: "OVERKILL", text: "Overkill" },
    { val: "MAYHEM", text: "Mayhem" },
    { val: "DEATH SENTANCE", text: "Death Sentence" },
];
let filterDifficulty = ref("");

let jobTitles = [
    "Escape Driver",
    "Hacker",
    "Crowd Control",
    "Explosives Expert",
    "Insider"
]

let heistNameInput = ref("");
let heistDiffInput = ref("");
let heistTactInput = ref("");
let chosenJob = ref();

function CreateHeist() {
    // console.log(heistNameInput.value)
    // console.log(heistDiffInput.value)
    // console.log(heistTactInput.value)
    // console.log(chosenJob.value)

    let heistObj = {
        name: heistNameInput.value,
        difficulty: heistDiffInput.value,
        tactic: heistTactInput.value,
        job: []
    }

    for(let i = 0; i < 5; i++) {
        heistObj.job.push({
            job_title: jobTitles[i],
            available: (chosenJob.value != i) ? "Yes" : "No"
        });
    };

    console.log(toRaw(heistObj))
    collection.insertOne(heistObj);
    client.close();
    router.push('/heists');
}
</script>

<template>
    <h1 class="page-title">Create Heist</h1>
    <form class="create-heist-box" @submit.prevent="CreateHeist">
        <section>
            <h2 for="input-name">Name of the heist:</h2>
            <input name="input-name" type="text" size="40" v-model="heistNameInput" />
        </section>
        <section>
            <h2>Heist difficulty:</h2>
            <Select :opts="optsDiff" name="filter-difficulty" id="filter-difficulty" class="creator-select"
                @did-change="(val) => { filterDifficulty = val; console.log(val) }" v-model="heistDiffInput">
            </Select>
        </section>
        <section>
            <h2>Heist tactic:</h2>
            <Select :opts="optsTact" name="filter-tactic" id="filter-tactic" class="creator-select"
                @did-change="(val) => { filterTactic = val; console.log(val) }" v-model="heistTactInput">
            </Select>
        </section>
        <section class="job-section" style="margin-bottom: 5rem;">
            <h2>Jobs:</h2>
            <p style="margin-bottom: 1em;">Choose what job you will have for this heist.</p>
            <div class="choice-container">
                <div>
                    <label for="escape-driver" style="margin-right: 0.5em;">Escape Driver</label>
                    <input type="radio" name="job-choice" id="escape-driver" v-model="chosenJob" value="0">
                </div>
                <div>
                    <label for="heist" style="margin-right: 0.5em;">Hacker</label>
                    <input type="radio" name="job-choice" id="heist" v-model="chosenJob" value="1">
                </div>
                <div>
                    <label for="crowd-control" style="margin-right: 0.5em;">Crowd Control</label>
                    <input type="radio" name="job-choice" id="crowd-control" v-model="chosenJob" value="2">
                </div>
                <div>
                    <label for="explosives-expert" style="margin-right: 0.5em;">Explosives Expert</label>
                    <input type="radio" name="job-choice" id="explosives-expert" v-model="chosenJob" value="3">
                </div>
                <div>
                    <label for="insider" style="margin-right: 0.5em;">Insider</label>
                    <input type="radio" name="job-choice" id="insider" v-model="chosenJob" value="4">
                </div>
            </div>
        </section>

        <button type="submit" style="margin-right: 1rem;">Create Heist</button>
        <button type="reset">Cancel</button>
    </form>
</template>

<style>
.create-heist-box {
    background-color: var(--hn-blue-dark);
    border-radius: 20px;
    padding: 2em;
    margin-top: 3rem;
}

.create-heist-box h2 {
    font-weight: 500;
    font-family: Lexend;
    color: var(--hn-white);
    font-size: x-large;
}

.input-section {
    margin: 1rem 0;
}

.job-section {
    font-size: large;
    color: var(--hn-white);
    display: flex;
    flex-direction: column;
}

.choice-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

}
</style>