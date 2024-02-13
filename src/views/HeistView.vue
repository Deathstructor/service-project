<script setup>
import HeistCard from '@/components/HeistCard.vue';
import { ref } from 'vue';
import Select from '@/components/Select.vue';

const optsTact = [
    { val: "", text: "-- Tactics --", disabled: true, selected: true },
    { val: "ALL", text: "All Tactics", },
    { val: "ANY", text: "Any" },
    { val: "LOUD", text: "Loud" },
    { val: "STEALTH", text: "Stealth" }
]
let filterTactic = ref("");

const optsDiff = [
    { val: "", text: "-- Difficulties --", disabled: true, selected: true },
    { val: "ALL", text: "All Difficulties" },
    { val: "EASY", text: "Easy" },
    { val: "NORMAL", text: "Normal" },
    { val: "HARD", text: "Hard" },
    { val: "VERY HARD", text: "Very Hard" },
    { val: "OVERKILL", text: "Overkill" },
    { val: "MAYHEM", text: "Mayhem" },
    { val: "DEATH SENTANCE", text: "Death Sentence" },
]
let filterDifficulty = ref("");
</script>

<template>
    <div class="heist-content">
        <div class="heist-top">
            <h1 class="page-title" id="heist-title">Heists</h1>

            <Select :opts="optsTact" name="filter-tactic" id="filter-tactic" class="filter-selector"
                @did-change="(val) => { filterTactic = val; console.log(val) }">
            </Select>

            <Select :opts="optsDiff" name="filter-difficulty" id="filter-difficulty" class="filter-selector"
                @did-change="(val) => { filterDifficulty = val; console.log(val) }">
            </Select>

            <router-link to="/heists/create" tag="button" id="heist-create">Create Heist</router-link>
        </div>
        <HeistCard :filterTactic="filterTactic" :filterDifficulty="filterDifficulty" />
    </div>
</template>

<style>
.heist-content {
    background-image: url(../assets/images/heist-page-bg.jpg);
    background-position: top center;
    padding: 1rem 5rem;
    min-height: 88.75vh;
}

.heist-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

#heist-title {
    text-shadow: 0 0 10px black;
}

.filter-selector {
    margin-bottom: 0.25rem;
    padding: 0.5em;
    background-color: var(--hn-blue-dark);
    color: var(--hn-white);
    font-family: Lexend;
    font-weight: 800;
    font-size: medium;
    border-radius: 20px;
    transition: ease-in-out 200ms;
}

.filter-selector:hover {
    background-color: var(--hn-blue-light);
}

#heist-create {
    font-family: Padaloma;
    font-size: medium;
    padding: 0.75em;
    border-radius: 30px;
    border-style: solid;
    border-color: var(--hn-blue-faded);
    border-width: 3px;
    color: var(--hn-white);
    background-color: var(--hn-blue-dark);
    transition: ease-in-out 200ms;
}

#heist-create:hover {
    background-color: var(--hn-blue-light);
}

#heist-create:active {
    background-color: var(--hn-green);
}
</style>