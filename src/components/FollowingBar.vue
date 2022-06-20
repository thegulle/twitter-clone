<template>
  <div class="w-full rounded-lg bg-lightest my-4">
    <div class=" p-3">
      <p class="text-lg font-bold">Who to Follow</p>
    </div>
    <button
      v-for="(user, index) in follow" :key="index"
      class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
      <img :src="`${user.src}`" class="w-12 h-12 rounded-full border border-lighter" />
      <div class="hidden lg:block ml-4">
        <p class="text-sm font-bold leading-tight"> {{ user.name }} </p>
        <p class="text-sm leading-tight"> {{ user.handle }} </p>
      </div>
      <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
        Follow
      </button>
    </button>
    <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
      Show More
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const follow = ref([
  { src: 'https://randomuser.me/api/portraits/men/79.jpg', name: 'Kriss Kovan', handle: '@kriss' },
  { src: 'https://randomuser.me/api/portraits/men/70.jpg', name: 'Danny D', handle: '@theD' },
  { src: 'https://randomuser.me/api/portraits/men/27.jpg', name: 'Hubert Aly', handle: '@alyway' }
])
</script>
