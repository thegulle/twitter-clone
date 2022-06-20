<template>
  <div class="flex container h-screen w-full">
    <LeftSideBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <RightSideBar />
  </div>
</template>
<script setup lang="ts">
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

</script>
