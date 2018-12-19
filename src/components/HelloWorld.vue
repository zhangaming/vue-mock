<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="vehicle">vehicle</button>
    <button @click="user">user</button>
    <button @click="users">users</button>
    <button @click="article">article</button>
    <button @click="pic">pic</button>
    <ul v-if ="articleData && articleData.length > 0">
      <li v-for=" (item,index) of articleData" :key="index">
        <h5>title:{{ item.title }}</h5>
        <h5>author_name:{{ item.author_name }}</h5>
        <h5>email:{{ item.email }}</h5>
        <h5>data:{{ item.data }}</h5>
        <h5>name:{{ item.name }}</h5>
        <img :src="item.thumbnail_pic_s" alt="">
      </li>
    </ul>
    <ul v-if ="picData && picData.length > 0">
      <li v-for=" (item,index) of picData" :key="index">
        <h5>title:{{ item.title }}</h5>
        <h5>id:{{ item.id }}</h5>
        <h5>namespace:{{ item.namespace }}</h5>
        <h5>createTime:{{ item.createTime }}</h5>
        <img :src="item.fileList[0].url" alt="">
        <h5>content:{{ item.content }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articleData: [],
      picData: []
    }
  },
  created () {
  },
  methods: {
    vehicle () {
      axios.post('/api/vehicle', null).then(res => {
        console.log(res)
      })
    },
    user () {
      axios.get('/api/user', null).then(res => {
        console.log(res)
      })
    },
    users () {
      axios.get('/api/users', null).then(res => {
        console.log(res)
      })
    },
    article () {
      axios.post('/api/article', 'prodata').then(res => {
        console.log(res)
        this.articleData = res.data.data
      })
    },
    pic () {
      this.articleData = []
      axios.post('/api/pic', 'prodata').then(res => {
        console.log(res)
        this.picData = res.data.data
        // this.articleData = res.data.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 100px;
  height: 100px;
}
</style>
