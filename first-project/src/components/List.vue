<template>
  <div class="expenses">
    <div class="expense b">
        <div class="item first">#</div>
        <div class="item">Дата</div>
        <div class="item">Категория</div>
        <div class="item">Цена</div>
        <div class="item last"></div>
    </div>
    <div class="expense" v-for="(item, ind) in items" :key="ind">
      <div class="item first">{{ item.id || ind + 1 }}</div>
      <div class="item">{{ item.date }}</div>
      <div class="item">{{ item.category }}</div>
      <div class="item">{{ item.cost }}</div>
      <div class="item last"><img class="points" src="../assets/points.svg" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.expense {
  border-bottom: 1.5px solid rgb(213, 217, 234);
  display: flex;
  max-width: 500px;
  width: 100%;
  height: 30px;
  align-items: center;
}
.expenses{
    margin-top: 10px;
}
.b {
    font-weight: bold;
}
.item {
    width: 150px;
}
.first {
    width: 50px;
}
.points {
  width: 27px;
}
.points:hover {
  cursor: pointer;
}
.last {
  width: 50px;
}
</style>