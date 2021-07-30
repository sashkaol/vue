<template>
  <div id="app">
    <v-row>
      <v-col>
        <div class="text-h5 text-md-h3 mb-8">My personal cost</div>
        <div class="menu">
          <router-link to="/dashboard">Dashboard</router-link> /
          <router-link to="/about">About</router-link> /
          <router-link to="/notfound">Not Found</router-link>
        </div>
        <main>
          <div class="content">
            <router-view />
          </div>
          <v-dialog v-model="show" width="300">
            <template v-slot:activator="{ on }">
              <v-btn color="teal" dark v-on="on"
                >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn
              >
              <br />
            </template>
            <v-card>
                <Form @addNewPay="addNewPay" :data="getReadyData" />
            </v-card>
          </v-dialog>
          <!-- <Form v-show="show" @addNewPay="addNewPay" :data="getReadyData" /> -->
          <List :items="createPages(curPage)" />
          Итого: {{ getFLV }}
          <Pagination :pagesCount="Math.ceil(getL / n)" @goToPage="goToPage" />
        </main>
      </v-col>
      <v-col> chart </v-col>
    </v-row>
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
      page: "",
      data: {},
    };
  },
  methods: {
    ...mapMutations(["setList", "addList"]),
    ...mapActions(["fetchData"]),
    addNewPay(data) {
      this.addList(data);
    },
    goToPage(ind) {
      this.curPage = ind;
      console.log(this.curPage);
    },
    createPages(page) {
      return this.getList.slice(
        this.n * (page - 1),
        this.n * (page - 1) + this.n
      );
    },
    add(link) {
      this.$router.push({ name: link });
      let data = {
        category: "",
        cost: "",
      };
      data.category = window.location.search.slice(
        window.location.search.indexOf("=") + 1,
        window.location.search.indexOf("?", 1)
      );
      data.cost = Number(
        window.location.search.slice(
          window.location.search.indexOf(
            "=",
            window.location.search.indexOf("=") + 1
          ) + 1
        )
      );
      this.data = data;
      this.show = true;
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    const page = this.$route.params.page || 1;
    this.curPage = +page;
  },
  computed: {
    ...mapGetters({
      getList: "getList",
    }),
    getFLV() {
      return this.$store.getters.getFullListValue;
    },
    getL() {
      return this.$store.getters.getLength;
    },
    getReadyData() {
      return this.data;
    },
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
  margin-left: 30px;
}
.pineButton {
  background-color: #25a79a;
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px #25a79a64;
  color: ghostwhite;
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s;
  margin-bottom: 20px;
  margin-top: 10px;
  outline: none;
}
.pineButton:hover {
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s;
  box-shadow: 0px 0px 5px 1px #25a79a;
  cursor: pointer;
}
.add {
  width: 40%;
  display: flex;
  gap: 10px;
}
.addList {
  width: 30%px;
  padding: 5px;
  height: 70px;
  box-sizing: border-box;
}
</style>
