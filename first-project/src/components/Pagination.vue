<template>
  <div>
    <button
      :ref="ind"
      class="page"
      @click="portal(ind + 1)"
      v-for="(page, ind) in pages"
      :key="ind"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pagesCount"],
  data() {
    return {
      pages: [],
    };
  },
  methods: {
    portal(ind) {
      this.$emit("goToPage", ind);
    },
    push() {
      for (let i = 1; i <= this.count; i++) {
        this.pages.push(i);
      }
    },
  },
  created() {
    setTimeout(() => {
      if (this.create) {
        this.push();
      }
    }, 100);
  },
  computed: {
    create() {
      if (this.pagesCount !== 0) {
        return true;
      } else return false;
    },
    count() {
      return this.pagesCount;
    },
  },
};
</script>

<style>
.page {
  background-color: white;
  outline: none;
  border: none;
  width: 20px;
  height: 25px;
}
.page:hover {
  background-color: #25a79a;
  color: white;
  cursor: pointer;
}
.active {
  background-color: #25a79a;
  color: white;
}
</style>