<script setup>
import { MongoClient } from 'mongodb';
import { ref, toRaw, defineProps } from 'vue'

const uri = "mongodb+srv://chastainpaul:uqja15ElJY5hRZSf@heistnetdb.gtpzx.mongodb.net/HeistnetDB?retryWrites=true&w=majority";

const client = new MongoClient(uri)
const database = client.db("HeistnetDB")
const collection = database.collection("heists")

async function GetData() {
    const matchCursor = await collection.find()

    const ret = [];
    for await (let heist of matchCursor) {
        ret.push(heist)
    }

    client.close()
    return ret;
}
const heists = ref(null);
const returnData = async () => heists.value = toRaw(await GetData());
returnData();

const props = defineProps(['filterDifficulty', 'filterTactic']);

function filterFunc(h) {    
    return (
        h.difficulty == (["ALL", ""].includes(props.filterDifficulty) ? h.difficulty : props.filterDifficulty) &&
        h.tactic == (["ALL", ""].includes(props.filterTactic) ? h.tactic : props.filterTactic)
    );
}

</script>

<template>
    <div v-if="heists" class="heist-card-alignment">
        <article v-for="item in heists.filter(filterFunc)" class="heist-card">
            <h1 id="heist-name">{{ item.name }}</h1>
            <main class="heist-card-content">

                <section>
                    <h3 class="heist-sub-titles">Difficulty: {{ item.difficulty }}</h3>
                    <h3 class="heist-sub-titles">Tactic: {{ item.tactic }}</h3>
                </section>

                <aside>
                    <h2>Jobs:</h2>
                    <div class="heist-job-container">
                        <div v-for="job in item.job" class="heist-job-info">
                            <h4>{{ job.job_title }}</h4>
                            <h4>Available: {{ job.available }}</h4>
                        </div>
                    </div>
                </aside>
            </main>
        </article>
    </div>
    <div v-else>
        <h1 class="page-title">Loading...</h1>
    </div>
</template>


<style>
.heist-card {
    background: radial-gradient(circle, var(--hn-blue-faded) 0%, var(--hn-blue-dark) 90%);
    color: white;
    margin: 2rem 1em;
    padding: 2em;
    border-radius: 20px;
    box-shadow: 0 0 10px #111;
    width: 45%;
    font-family: Lexend;
}

.heist-card-alignment {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

#heist-name {
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.heist-sub-titles {
    margin-bottom: 1rem;
    font-size: larger;
}

.heist-job-container {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
}

aside h2 {
    font-weight: 650;
}

.heist-job-info {
    margin-left: 1em;
    margin-bottom: 1em;
}

.heist-card-content {
    display: flex;
    flex-direction: column;
}

section {
    display: flex;
    gap: 10%;
}
</style>