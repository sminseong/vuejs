<script>
  export default {
    data() {
      return {
        output: null,
        prev: null,
        cur: null,
        operator: null,
        operatorActions: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        },
      };
    },
    
    methods: {
      operation(e) {
        const n = e.currentTarget.value;

        if (n === 'C') {
          this.clear();
        } else if (['+', '-', '*', '/', '='].includes(n)) {
          this.calculate(n);
        } else {
          this.userInput(n);
        }
      },

      clear() {
        this.output = null;
        this.prev = null;
        this.cur = null;
        this.operator = null;
      },

      calculate(n) {
        this.cur = Number(this.cur);
        if (this.operator !== null) {
          this.prev = this.operatorActions[this.operator](this.prev, this.cur);

          if (n === '=') {
            this.output = this.prev;
            this.operator = null;
            this.cur = this.prev;
          } else {
            this.prev = this.cur;
            this.operator = n;
            this.cur = null;
          }
        } else {
          this.prev = this.cur;
          this.operator = n;
          this.cur = null;
        }
      },

      userInput(n) {
        this.cur = this.cur === null? n: (this.cur += n);
        this.output = this.cur;
      },
    },
  }
</script>

<template>
  <div class="calculator">
      <form name="forms">
        <input v-model="output" type="text" name="output" readonly />
        <input type="button" class="clear" value="C" @click="operation"/>
        <input type="button" class="operator" value="/" @click="operation"/>
        <input type="button" value="1" @click="operation"/>
        <input type="button" value="2" @click="operation"/>
        <input type="button" value="3" @click="operation"/>
        <input type="button" class="operator" value="*" @click="operation"/>
        <input type="button" value="4" @click="operation"/>
        <input type="button" value="5" @click="operation"/>
        <input type="button" value="6" @click="operation"/>
        <input type="button" class="operator" value="+" @click="operation"/>
        <input type="button" value="7" @click="operation"/>
        <input type="button" value="8" @click="operation"/>
        <input type="button" value="9" @click="operation"/>
        <input type="button" class="operator" value="-" @click="operation"/>
        <input type="button" class="dot" value="." @click="operation"/>
        <input type="button" value="0" @click="operation"/>
        <input type="button" class="operator result" value="=" @click="operation"/>
      </form>
    </div>
</template>

<style scoped>
  @import './assets/style.css';
</style>
