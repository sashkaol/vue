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
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    portal(ind) {
      this.$emit("goToPage", ind);
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