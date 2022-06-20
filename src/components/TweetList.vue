<template>
  <div class="flex flex-col-reverse">
    <div v-for="(tweet, index) in props.tweetList" :key="index" class="w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img :src="tweet.user.avatar" class="h-12 w-12 rounded-full flex-none" />
      </div>
      <div class="w-full">
        <div class="flex items-center w-full">
          <p class="font-semibold"> {{ tweet.user.name }} </p>
          <p class="text-sm text-dark ml-2"> @{{ tweet.user.username }} </p>
          <p class="text-sm text-dark ml-2"> {{ (tweet.id * 10).toFixed(0) }} sec
          </p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class="py-2">
          {{ tweet.content }}
        </p>
        <div class="flex items-center justify-between w-full">
          <button class="flex items-center text-sm text-dark focus:text-blue">
            <i class="far fa-comment mr-3"></i>
            <p> {{ tweet.comments }} </p>
          </button>
          <button class="flex items-center text-sm text-dark focus:text-green">
            <i class="fas fa-retweet mr-3"></i>
            <p> {{ tweet.retweets }} </p>
          </button>
          <button class="flex items-center text-sm text-dark focus:text-red">
            <i class="fas fa-heart mr-3"></i>
            <p> {{ tweet.likes }} </p>
          </button>
          <button class="flex items-center text-sm text-dark">
            <i class="fas fa-share-square mr-3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  tweetList: {
    required: true,
    type: Array,
    default: () => []
  }
})
</script>
