<template>
  <div>
        <input type="number" v-model.number="oper1"/>
        <input type="number" v-model.number="oper2"/>
        = {{ result }}
        <p>
            <button v-on:click="sum()">+</button>
            <button @click="result = oper1 - oper2">-</button>
            <button v-on:click="result = oper1 * oper2">*</button>
            <button @click="div()">/</button>
            <button @click="degree()">В степень</button>
        </p>
  </div>
</template>

<script>
export default {
    name: 'Calc',
    data: () => ({
        oper1: 0,
        oper2: 0,
        result: 0
    }),
    methods: {
        sum() {
            this.result = this.oper1 + this.oper2;
        },
        div() {
            this.result = this.oper1 / this.oper2;
            this.result = parseInt(new String(this.result));
        },
        degree() {
            this.result = 1;
            for (let i = 0; i < this.oper2; i++) {
                this.result *= this.oper1;
            }
        }
    } 
}
</script>

<style>

</style>