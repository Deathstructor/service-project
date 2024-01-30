<script setup>
import HeistCard from '@/components/HeistCard.vue';
</script>

<template>
    <div class="heist-content">
        <h1 class="page-title" id="h-title">Heists</h1>
        <HeistCard />
    </div>
</template>

<style>
.heist-content {
    background-image: url(../assets/images/heist-page-bg.jpg);
    background-position: top center;
    padding: 1rem 5rem;
}

#h-title {
    text-shadow: 0 0 10px black;
}
</style>