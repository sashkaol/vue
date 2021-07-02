<template>
  <div>
        <input type="number" v-model.number="oper1" />
        <input type="number" v-model.number="oper2" />
        = {{ result }}
        <br /><br />
        <div id="operations">
            <button v-for="oper in operations" 
                    :key="oper" 
                    @click="calculate(oper)"
                    v-bind:title="oper">
                    {{ oper }}
            </button>
        </div>
        <br />
        <div v-show="error" style="color: red">{{ error }}</div>
        <div class="history">{{ logs }}</div>
        <br />
        <input type="checkbox"
                id="check"
                v-model="seeKeyboard"
        />
        <label for="check">Показать экранную клавиатуру</label>
        <br /><br />
        <div id="keyboard" v-show="seeKeyboard">
            <button v-for="btn in btns" 
                    :key="btn"
                    v-bind:title="btn"
                    @click="write(btn)">
                    {{ btn }}
            </button>
            <button @click="backspace">&#8592;</button>
            <br /><br />
            <div>
                <input type="radio"
                       id="firts" 
                       name="opers" 
                       checked
                       v-model="operands"
                       v-bind:value="true"
                /><label for="first">Первый операнд</label>
                <input type="radio" 
                       name="opers"
                       id="second" 
                       v-model="operands"
                       v-bind:value="false"
                /><label for="second">Второй операнд</label>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Calc',
    data: () => ({
        oper1: 0,
        oper2: 0,
        result: 0,
        error: '',
        operations: ['+', '-', '*', '/', 'degree'],
        btns: [1,2,3,4,5,6,7,8,9,0],
        logs: {},
        seeKeyboard: false,
        operands: true
    }),
    methods: {
        backspace() {
            if (this.operands) {
                if (isNaN(this.oper1)) this.oper1 = 0
                else {
                   this.oper1 = new String(this.oper1).slice(0, -1);
                   this.oper1 = parseInt(this.oper1);
                }
            } else {
                if (isNaN(this.oper2)) this.oper2 = 0
                else {
                    this.oper2 = new String(this.oper2).slice(0, -1);
                    this.oper2 = parseInt(this.oper2);
                }
            } 
        },
        write(key) {
            if (this.operands) {
                if (isNaN(this.oper1)) this.oper1 = +key
                else {
                    this.oper1 = new String(this.oper1) + key;
                    this.oper1 = parseInt(this.oper1);
                }
            } else {
                if (isNaN(this.oper2)) this.oper2 = +key
                else {
                    this.oper2 = new String(this.oper2) + key;
                    this.oper2 = parseInt(this.oper2);
                }
            }
        },
        calculate(act = '+') {
            switch (act) {
                case '+': 
                    this.result = this.oper1 + this.oper2;
                    break
                
                case '-': 
                    this.result = this.oper1 - this.oper2;
                    break
                
                case '*': 
                    this.result = this.oper1 * this.oper2;
                    break
                
                case '/': 
                    this.error = '';
                    if (this.oper2 == 0) {
                        this.error = 'Ошибка! Знаменатель равен нулю!'
                    } else {
                        this.result = this.oper1 / this.oper2;
                        this.result = parseInt(new String(this.result));
                    }
                    break
                
                case 'degree': 
                    this.result = 1;
                    for (let i = 0; i < this.oper2; i++) {
                        this.result *= this.oper1;
                    }
                
            }
            const key = Date.now();
            const value = `${this.oper1} ${act} ${this.oper2} = ${this.result}`;
            this.$set(this.logs, key, value);
        },
    },
}
</script>

<style>

</style>