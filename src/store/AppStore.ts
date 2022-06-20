import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  const activeTab = ref('home')
  const dropdown = ref(false) // dropdown menu
  const tabs = ref([
    {
      icon: 'fas fa-home', title: 'Home', id: 'home', link: '/'
    },
    {
      icon: 'fas fa-hashtag', title: 'Explore', id: 'explore', link: '#'
    },
    {
      icon: 'far fa-bell', title: 'Notifications', id: 'notifications', link: '#'
    },
    {
      icon: 'far fa-envelope', title: 'Messages', id: 'messages', link: '#'
    },
    {
      icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks', link: '#'
    },
    {
      icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists', link: '#'
    },
    {
      icon: 'far fa-user', title: 'Profile', id: 'profile', link: '/profile'
    },
    {
      icon: 'fas fa-cog', title: 'Settings', id: 'settings', link: '#'
    },
    {
      icon: 'fas fa-ellipsis-h', title: 'More', id: 'more', link: '#'
    }
  ])
  const trending = ref([
    {
      subject: 'Software',
      title: '#javascript',
      count: '1.5k'
    },
    {
      subject: 'Software',
      title: '#vuejs',
      count: '1.5k'
    },
    {
      subject: 'Software',
      title: '#typescript',
      count: '1.5k'
    }
  ])
  const follow = ref([
    { src: 'https://randomuser.me/api/portraits/women/75.jpg', name: 'Jane Doe', handle: '@janedoe' },
    { src: 'https://randomuser.me/api/portraits/women/72.jpg', name: 'Mia Wong', handle: '@miaW' },
    { src: 'https://randomuser.me/api/portraits/women/13.jpg', name: 'Verona Blair', handle: '@blairVerona' }
  ])

  return {
    tabs,
    activeTab,
    trending,
    follow,
    dropdown
  } as const
})
