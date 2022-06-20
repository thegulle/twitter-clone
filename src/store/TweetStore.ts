import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './UserStore'
const userStore = useUserStore()
const userSession = reactive(userStore.user)

export const useTweetStore = defineStore('TweetStore', () => {
    const tweets = ref([
        {
            id: 1,
            user: {
                id: 1,
                name: 'Eray Gulle',
                username: 'thegulle',
                avatar: 'https://avatars.githubusercontent.com/u/94065142?v=4'
            },
            content: "I'm a full-stack web developer and I love to code.",
            likes: 0,
            retweets: 0,
            comments: 0,
            date: '2022-01-01'
        },
        {
            id: 2,
            user: {
                id: 2,
                name: 'Jane Doe',
                username: 'janedoe',
                avatar: 'https://randomuser.me/api/portraits/women/75.jpg'
            },
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likes: 0,
            retweets: 0,
            comments: 0,
            date: '2022-01-01'
        },
        {
            id: 3,
            user: {
                id: 3,
                name: 'Mia Wong',
                username: 'miaW',
                avatar: 'https://randomuser.me/api/portraits/women/72.jpg'
            },
            content: 'Nam ut ligula ac diam tempor hendrerit.',
            likes: 0,
            retweets: 0,
            comments: 0,
            date: '2022-01-01'
        },
        {
            id: 4,
            user: {
                id: 4,
                name: 'Verona Blair',
                username: 'balirVerona',
                avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
            },
            content: 'Sed mi augue, cursus quis sodales sit amet, gravida quis sapien.',
            likes: 0,
            retweets: 0,
            comments: 0,
            date: '2022-01-01'
        },
        {
            id: 5,
            user: {
                id: 4,
                name: 'Verona Blair',
                username: 'balirVerona',
                avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
            },
            content: 'Phasellus lacus justo, convallis vel rutrum in, condimentum quis ipsum.',
            likes: 0,
            retweets: 0,
            comments: 0,
            date: '2022-01-01'
        }
    ])

    const addTweet = async (tweet: any) => {
        await tweets.value.push({
            id: 0,
            user: {
                id: userSession.id,
                name: userSession.name,
                username: userSession.username,
                avatar: userSession.avatar
            },
            content: tweet,
            likes: 0,
            retweets: 0,
            comments: 0,
            date: new Date().toISOString().split('T')[0]
        })
    }

    const cleanObject = (form: any) => {
        for (const [key, value] of Object.entries(form)) {
            const propType = typeof (form[key])

            switch (propType) {
                case "number":
                    form[key] = 0
                    break

                case "string":
                    form[key] = null
                    break

                case "boolean":
                    form[key] = false
                    break

                case "undefined":
                    form[key] = undefined
                    break

                default:
                    if (value === null) {
                        continue
                    }

                    cleanObject(form[key])
                    break
            }
        }
    }

    return {
        tweets,
        addTweet,
        cleanObject
    }
})
