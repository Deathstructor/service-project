<script setup>
import { MongoClient } from 'mongodb';
import { ref, toRaw } from 'vue'

const uri = "mongodb+srv://chastainpaul:uqja15ElJY5hRZSf@heistnetdb.gtpzx.mongodb.net/HeistnetDB?retryWrites=true&w=majority";

const client = new MongoClient(uri)
const database = client.db("HeistnetDB")
const collection = database.collection("heists")

async function GetName() {
    const matchCursor = await collection.find()

    const ret = [];
    for await (let heist of matchCursor) {
        ret.push(heist)
    }

    return ret;
}

const heists = ref(null);
const returnName = async () => heists.value = toRaw(await GetName())
returnName()

</script>

<template>
    <div v-if="heists">
        <div v-for="item in heists" class="h-card">
            <h1 id="h-name">{{ item.name }}</h1>
            <h3 class="h-sub-titles">Difficulty: {{ item.difficulty }}</h3>
            <h3 class="h-sub-titles">Tactic: {{ item.tactic }}</h3>
            <div class="h-job-container">
                <h2>Jobs:</h2>
                <div v-for="job in item.job" class="h-job-info">
                    <h4>Title: {{ job.job_title }}</h4>
                    <h4>Available: {{ job.available }}</h4>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1 class="page-title">Loading...</h1>
    </div>
</template>


<style>
.h-card {
    background-color: var(--hn-blue-dark);
    color: white;
    margin: 2rem 1em;
    padding: 2em;
    border-radius: 20px;
    box-shadow: 0 0 10px #111;
}

#h-name {
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.h-sub-titles {
    margin-bottom: 1rem;
    font-size: larger;
}

.h-job-container h2 {
    font-weight: 650;
}

.h-job-info {
    margin-left: 1em;
    margin-bottom: 1em;
}
</style>