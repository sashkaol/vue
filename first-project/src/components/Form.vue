<template>
  <div>
    <div class="form">
      <input class="inp" v-model="newId" readonly />
      <input @keyup="check" class="inp" v-model="date" placeholder="Дата" />
      <input @keyup="check" class="inp" v-model="category" placeholder="Категория" />
      <input @keyup="check" class="inp" type="number" v-model.number="cost" placeholder="Расходы" />
      <button :disabled="checkBtn" id="add" class="pineButton add" @click="add(), idP()">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 50,
      date: "",
      category: "",
      cost: "",
      checkBtn: true
    };
  },
  methods: {
    idP() {
      this.id++
    },
    currentDate() {
      this.date = new Date();
      let d = this.date.getDate();
      let m = this.date.getMonth();
      let y = this.date.getFullYear();
      return `${d}.${m}.${y}`;
    },
    add() {
      const data = {
        id: this.newId,
        date: this.date || this.currentDate(),
        category: this.category,
        cost: this.cost,
      };
      this.$emit("addNewPay", data);
      this.date = ''; this.category = ''; this.cost = '';
      this.check();
    },
    check() {
      if ((this.category == '') || (this.cost == '')) {
        this.checkBtn = true
      } else this.checkBtn = false
    }
  },
  computed: {
    newId() {
      return 1 + this.id
    }
  }
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
  margin-bottom: 20px;
  margin-top: 10px;
  outline: none;
}
.pineButton:disabled {
  background-color: #8e9696;
  box-shadow: none;
}
.pineButton:disabled:hover {
  background-color: #8e9696;
  box-shadow: none;
}
.pineButton:hover {
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s;
  box-shadow: 0px 0px 5px 1px #25a79a;
}
.inp::-webkit-inner-spin-button,
.inp::-webkit-outer-spin-button{
  appearance: none;
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
.add {
  margin-top: 5px;
  width: 75px;
}
</style>