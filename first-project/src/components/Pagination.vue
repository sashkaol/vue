<template>
  <div>
    <button
      :ref="ind"
      class="page"
      v-bind:class="{ active: isActive === ind+1 }"
      @click="portal(ind + 1), select(ind + 1)"
      v-for="(page, ind) in render"
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
      isActive: 1
    };
  },
  methods: {
    select(ind) {
        this.isActive = ind
    },
    portal(ind) {
      this.$emit("goToPage", ind);
    },
    push() {
      this.pages = [];
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
    render() {
      this.push();
      return this.pages;
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