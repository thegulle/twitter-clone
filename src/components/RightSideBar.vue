<template>
  <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 relative">
    <!-- Trends Bar -->
    <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4" placeholder="Search Twitter" />
    <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
    <div class="w-full rounded-lg bg-lightest p-2">
      <div class="flex items-center justify-between p-3">
        <p class="text-lg font-bold">Trends for You</p>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <button v-for="(trend, index) in appStore.trending" :key="index"
              class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
        <div>
          <p class="text-xs text-left leading-tight text-dark"> {{ trend.subject }} </p>
          <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title }} </p>
          <p class="text-left text-sm leading-tight text-dark"> {{ trend.count }} </p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
    <!-- Following Bar -->
    <div class="w-full rounded-lg bg-lightest my-4 p-2">
      <div class=" p-3">
        <p class="text-lg font-bold">Who to Follow</p>
      </div>
      <button v-for="(user, index) in appStore.follow" :key="index"
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
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/AppStore'

const appStore = useAppStore()

</script>
