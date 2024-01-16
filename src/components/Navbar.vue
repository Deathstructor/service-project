<template>
    <nav>
        <img id="logo" src="../assets/images/heistnet-logo.svg" alt="Heist.net logo">
        <router-link v-for="content in links" :to="{ name: content.name }">
            <h3>{{ content.title }}</h3>
        </router-link>
    </nav>
</template>

<script setup>
let links = [
    { name: "home", title: "Home" },
    { name: "heists", title: "Heists" },
    { name: "account", title: "Account" },
    { name: "about", title: "About" }
]
</script>

<style>
img {
    width: 165px;
    height: auto;
}

nav {
    background-color: rgb(40, 40, 50);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

h3 {
    font-family: Padaloma;
    font-size: 1em;
    padding: 0 0.3em;
    border-radius: 10px;
    /* background-color: aliceblue; */
    transition: all ease-in-out 250ms;
}

h3:hover {
    box-shadow: inset 0.1em 0.1em 0.2em #000;
    text-shadow: 0.1em 0.1em 0.1em #111;
    color: rgb(0, 183, 255);
}
</style>