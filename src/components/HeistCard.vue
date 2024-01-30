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
            <h2>{{ item.name }}</h2>
            <h4>Difficulty: {{ item.difficulty }}</h4>
            <h4>Tactic: {{ item.tactic }}</h4>
            <div v-for="job in item.job">
                <h4>Title: {{ job.job_title }}</h4>
                <h4>Available: {{ job.available }}</h4>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>