<template>
  <TheNav></TheNav>
  <main>
    <transition name="fade" mode="out-in" appear>
      <HomeView />
    </transition>
  </main>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheNav from '@/components/Nav/TheNav.vue'
import TheFooter from './components/Footer/TheFooter.vue'
import HomeView from './views/HomeView.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
