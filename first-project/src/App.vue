<template>
  <div id="app">
    <h1>Мои расходы</h1>
    <button class="pineButton" @click="clicked()">
      Добавить расходы&ensp;➕
    </button>
    <Form v-show="show" @addNewPay="addNewPay" />
    <List :items="createPages(curPage)" />
    Итого: {{ getFLV }}
    <Pagination :pagesCount="Math.ceil(getL / n)" @goToPage="goToPage" />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Form from "./components/Form.vue";
import Pagination from "./components/Pagination.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Form,
    List,
    Pagination,
  },
  data() {
    return {
      show: false,
      curPage: 1,
      n: 5,
    };
  },
  methods: {
    ...mapMutations(["setList", "addList"]),
    ...mapActions(["fetchData"]),
    addNewPay(data) {
      this.addList(data);
    },
    clicked() {
      this.show = !this.show;
    },
    goToPage(ind) {
      this.curPage = ind;
    },
    createPages(page) {
      return this.getList.slice(this.n * (page - 1), this.n * (page - 1) + this.n)
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      getList: "getList",
    }),
    getFLV() {
      return this.$store.getters.getFullListValue;
    },
    getL() {
      return this.$store.getters.getLength
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}
</style>
