<template>
  <div id="app">
    <List :items="List" />
    <button class="pineButton" @click="clicked">Добавить расходы&ensp;➕</button>
    <Form v-show="show" @addNewPay="addNewPay" />
  </div>
</template>

<script>
import List from './components/List.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Form,
    List
  },
  data() {
    return {
      List: [],
      show: false
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: '12.11.2021',
          category: 'Food',
          cost: 200 
        },
        {
          date: '12.11.2021',
          category: 'Food',
          cost: 200 
        },
        {
          date: '12.11.2021',
          category: 'Food',
          cost: 200 
        },
        {
          date: '12.11.2021',
          category: 'Food',
          cost: 200 
        }
      ]
    },
    addNewPay(data) {
      console.log(data);
      this.List = [...this.List, data]
    },
    clicked() {
      this.show = !this.show;
    }
  },
  created() {
    return this.List = this.fetchData();
  } 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
