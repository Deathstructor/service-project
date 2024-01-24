<template>
  <div class="home-content">
    <img id="heistnet-logo-home" src="../assets/images/heistnet-logo-home.svg" alt="heist.net logo">
    <h1>Welcome to Heist.net!</h1>
  </div>
</template>

<script setup>

</script>

<style>
.home-content {
  margin: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: fadeInAnim ease 2s;
}

@keyframes fadeInAnim {
  0% {
    opacity: 0;
    padding-top: 40%;
  }
  100% {
    opacity: 1;
    padding-top: 0%;
  }
}

#heistnet-logo-home {
  width: 40%;
  height: auto;
}

h1 {
  margin-top: 5rem;
  font-family: Padaloma;
  font-size: 3em;
  color: rgb(0, 100, 200);
}
</style>