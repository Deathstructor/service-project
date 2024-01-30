<template>
    <nav>
        <img id="heistnet-logo-nav" src="../assets/images/heistnet-logo-nav.svg" alt="Heist.net logo">
        <router-link v-for="content in links" :to="{ name: content.name }">
            <h3 id="nav-title">{{ content.title }}</h3>
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
#heistnet-logo-nav {
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

#nav-title {
    font-family: Padaloma;
    font-size: 1em;
    padding: 0 0.3em;
    border-radius: 10px;
    transition: all ease-in-out 250ms;
}

#nav-title:hover {
    box-shadow: inset 0.1em 0.1em 0.2em #000;
    text-shadow: 0.1em 0.1em 0.1em #111;
    color: var(--hn-blue-light);
}
</style>