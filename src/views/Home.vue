<template>
  <div class="w-full md:w-1/2 h-full overflow-y-scroll">
    <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
      <h1 class="text-xl font-bold">Home</h1>
      <i class="far fa-star text-xl text-blue"></i>
    </div>
    <TweetForm @addTweet="tweetStore.addTweet" />
    <transition name="fade" mode="out-in">
      <TweetList :tweetList="tweetStore.tweets" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useTweetStore } from '@/store/TweetStore'
import TweetForm from '@/components/TweetForm'
import TweetList from '@/components/TweetList'

const tweetStore = useTweetStore()

</script>
