<template>
  <div class="px-5 py-3 border-b-8 border-lighter flex">
    <div class="flex-none">
      <img
        src="https://avatars.githubusercontent.com/u/94065142?v=4"
        class="flex-none w-12 h-12 rounded-full border border-lighter"
      />
    </div>
    <form @submit.prevent class="w-full px-4 relative">
      <textarea
        v-model="content"
        placeholder="What's up?"
        class="mt-3 pb-3 w-full focus:outline-none"
        @keyup.enter="$emit('addTweet', content), (content = '')"
      ></textarea>
      <div class="flex items-center">
        <i class="text-lg text-blue mr-4 far fa-image"></i>
        <i class="text-lg text-blue mr-4 fas fa-film"></i>
        <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
        <i class="text-lg text-blue mr-4 far fa-smile"></i>
      </div>
      <button
        type="submit"
        @click="$emit('addTweet', content), (content = '')"
        class="
          h-10
          px-4
          text-white
          font-semibold
          bg-blue
          hover:bg-darkblue
          focus:outline-none
          rounded-full
          absolute
          bottom-0
          right-0
        "
      >
        Tweet
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const content = ref("")
</script>
