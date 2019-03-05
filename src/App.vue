<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">A Propos</router-link>
      <router-link to="/login">Se connecter</router-link>
      <router-link to="/signin">S'enregistrer</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    text-align: center;
  }
  #nav {
    padding: 30px;
  }
</style>
