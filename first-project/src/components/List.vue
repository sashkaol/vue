<template>
  <div class="expenses">
      <h1>Мои расходы</h1>
      <div class="expense" v-for="(item, ind) in items" :key="ind">
          {{ ind + 1 }} &ensp; {{ item.date }} &ensp; {{ item.category }} &ensp; {{ item.cost }}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>
    .expense {
        border-bottom: 1px solid black;
        max-width: 500px;
        width: 100%;
    }
</style>