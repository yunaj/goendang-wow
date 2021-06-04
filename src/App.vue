<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="item in articles" :key="item.id">
        <img :src="getImageUrl(item.image)"
             alt="" width="100" height="100">
        <span class="title">{{ item.title }}</span>
        <span>{{ item.content }}</span>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import {db} from '../firebase'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        articles: []
      }
    },
    methods: {
      getArticles() {
        db.collection('articles').onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.articles.push({id: doc.id, ...doc.data()})
          });
        });
      },
      getImageUrl(image) {
        return `https://firebasestorage.googleapis.com/v0/b/kinfork-d24c7.appspot.com/o/${image}?alt=media`
      }
    },
    created() {
      this.getArticles()
    }
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .title {
        margin-right: 5px;
    }
</style>