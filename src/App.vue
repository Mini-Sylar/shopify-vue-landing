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
import { useHead } from '@unhead/vue'

useHead({
  title: 'Shopify + VueJS',
  meta: [
    {
      name: 'description',
      content: 'Build Shopify Apps with VueJS.'
    },
    {
      name: 'keywords',
      content:
        'Shopify, VueJS, Shopify Apps, VueJS Shopify Apps, Shopify VueJS, Shopify VueJS Apps, Shopify VueJS App, Shopify App, VueJS App'
    },
  ]
})
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
