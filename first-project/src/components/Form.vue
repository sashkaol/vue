<template>
  <div>
    <div class="form">
      <input class="inp" v-model="date" placeholder="Дата" />
      <input class="inp" v-model="category" placeholder="Категория" />
      <input class="inp" v-model.number="cost" placeholder="Расходы" />
      <button class="pineButton" style="width: 75px" @click="add">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      cost: "",
    };
  },
  methods: {
    currentDate() {
      this.date = new Date();
      let d = this.date.getDate();
      let m = this.date.getMonth();
      let y = this.date.getFullYear();
      return `${d}.${m}.${y}`;
    },
    add() {
      const data = {
        date: this.date || this.currentDate(),
        category: this.category,
        cost: this.cost,
      };
      this.$emit("addNewPay", data);
    },
  },
};
</script>

<style>
.pineButton {
  background-color: #25a79a;
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px #25a79a64;
  color: ghostwhite;
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s;
  margin-bottom: 10px;
  margin-top: 5px;
}
.pineButton:hover {
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s;
  box-shadow: 1px 1px 5px 1px #25a79a;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
}
.inp {
  outline: none;
}
</style>