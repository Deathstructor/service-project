<template>
  <div class="home-content">
    <img id="heistnet-logo-home" src="../assets/images/heistnet-logo-home.svg" alt="heist.net logo">
    <h1 class="page-title">Welcome to Heist.net!</h1>
  </div>
</template>

<style>
.home-content {
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg, rgba(0,0,40,1) 0%, rgba(0,100,200,1) 100%);
  position: absolute;
  width: 100%;
  min-height: 88.75vh;
  padding: 6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: fadeInAnim ease 2s;
  text-shadow: 0 0 10px #222;
}

.home-content h1 {
  color: var(--hn-white);
}

@keyframes fadeInAnim {
  0% {
    opacity: 0;
    padding-top: 40%;
  }

  100% {
    opacity: 1;
    padding-top: 6rem;
  }
}

#heistnet-logo-home {
  width: 40%;
  height: auto;
}
</style>