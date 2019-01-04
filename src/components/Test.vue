<template>
  <div>
    <button @click="add2">增加2</button>
    <button @click="add">增加</button>
    <span>{{num}}</span>
    <span>{{result}}</span>
    <span>{{msg}}</span>
    <button @click="reduce()">减少</button>
    <button @click="reduce2">减少2</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      num: 0
    }
  },
  computed: {
    msg () {
      return this.$store.state.number
    },
    result () {
      return this.playing ? '成功' : '失败'
    },
    ...mapGetters([
      'playing'
    ])
  },
  methods: {
    add () {
      console.log(this.msg)
      this.$store.commit('SET_NUMBER', this.msg + 1)
    },
    reduce () {
      console.log(this.msg)
      this.$store.commit('SET_NUMBER', this.msg - 1)
    },
    add2 () {
      console.log(this.msg)
      this.addNumber({number: this.msg})
    },
    reduce2 () {
      console.log(this.msg)
      this.reduceNumber({number: this.msg})
    },
    ...mapActions([
      'addNumber',
      'reduceNumber'
    ])
  }
}
</script>
