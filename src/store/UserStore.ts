import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', () => {
  const user = ref({
    id: 1,
    name: 'Eray Gulle',
    username: 'thegulle',
    email: 'eraygulle1@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/94065142?v=4'
  })

  const favorites = ref([])

  const retweets = ref([])

  const following = ref([])

  return {
    user,
    favorites,
    retweets,
    following
  } as const
})
