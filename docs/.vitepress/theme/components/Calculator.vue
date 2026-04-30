<template>
  <div class="calculator-wrap">
    <div class="calculator">
      <div class="display">{{ display }}</div>
      <div class="buttons">
        <button class="btn fn" @click="clearAll">C</button>
        <button class="btn fn" @click="toggleSign">±</button>
        <button class="btn fn" @click="performOperation('%')">%</button>
        <button class="btn op" @click="performOperation('/')">÷</button>
        <button class="btn" @click="inputDigit(7)">7</button>
        <button class="btn" @click="inputDigit(8)">8</button>
        <button class="btn" @click="inputDigit(9)">9</button>
        <button class="btn op" @click="performOperation('*')">×</button>
        <button class="btn" @click="inputDigit(4)">4</button>
        <button class="btn" @click="inputDigit(5)">5</button>
        <button class="btn" @click="inputDigit(6)">6</button>
        <button class="btn op" @click="performOperation('-')">−</button>
        <button class="btn" @click="inputDigit(1)">1</button>
        <button class="btn" @click="inputDigit(2)">2</button>
        <button class="btn" @click="inputDigit(3)">3</button>
        <button class="btn op" @click="performOperation('+')">+</button>
        <button class="btn zero" @click="inputDigit(0)">0</button>
        <button class="btn" @click="inputDecimal">.</button>
        <button class="btn op eq" @click="calculateResult">=</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const display = ref('0')
const operator = ref(null)
const previousValue = ref('')
const waitingForOperand = ref(false)

function inputDigit(digit) {
  if (waitingForOperand.value) {
    display.value = String(digit)
    waitingForOperand.value = false
  } else {
    display.value = display.value === '0' ? String(digit) : display.value + digit
  }
}

function inputDecimal() {
  if (waitingForOperand.value) {
    display.value = '0.'
    waitingForOperand.value = false
    return
  }
  if (!display.value.includes('.')) {
    display.value += '.'
  }
}

function toggleSign() {
  display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value
}

function clearAll() {
  display.value = '0'
  operator.value = null
  previousValue.value = ''
  waitingForOperand.value = false
}

function performOperation(nextOperator) {
  const input = parseFloat(display.value)

  if (operator.value && waitingForOperand.value) {
    operator.value = nextOperator
    return
  }

  if (previousValue.value === '') {
    previousValue.value = input
  } else if (operator.value) {
    const result = calculate(parseFloat(previousValue.value), input, operator.value)
    display.value = String(result)
    previousValue.value = result
  }

  waitingForOperand.value = true
  operator.value = nextOperator
}

function calculate(a, b, op) {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return b !== 0 ? a / b : '不能除以0'
    case '%': return a % b
    default: return b
  }
}

function calculateResult() {
  if (!operator.value || previousValue.value === '') return
  const input = parseFloat(display.value)
  const result = calculate(parseFloat(previousValue.value), input, operator.value)
  display.value = String(result)
  previousValue.value = ''
  operator.value = null
  waitingForOperand.value = true
}
</script>

<style scoped>
.calculator-wrap {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.calculator {
  width: 280px;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
.display {
  background: #2d2d2d;
  color: #fff;
  font-size: 2.4em;
  font-family: 'Consolas', 'Courier New', monospace;
  text-align: right;
  padding: 15px 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  min-height: 60px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.btn {
  padding: 15px 0;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #3a3a3a;
  color: #fff;
  transition: background 0.15s;
}
.btn:hover { background: #4a4a4a; }
.btn:active { background: #555; }
.btn.fn { background: #5a5a5a; }
.btn.fn:hover { background: #6a6a6a; }
.btn.op { background: #ff9500; color: #fff; }
.btn.op:hover { background: #ffaa33; }
.eq { background: #ff9500; }
.zero { grid-column: span 2; }
</style>
