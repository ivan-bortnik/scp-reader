<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
