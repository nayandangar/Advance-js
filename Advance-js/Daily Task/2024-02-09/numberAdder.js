class NumberAdder {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
   sum() {
    return this.num1 + this.num2;
    }
   mines() {
    return this.num1 - this.num2;
    }
    sub() {
        return this.num1 / this.num2;
    }
    multiplication() {
        return this.num1 * this.num2;
    }
}
    
const adder = new NumberAdder(25, 10);
console.log("---------num1 + num2 =>",adder.sum());
console.log("---------num1 - num2 =>",adder.mines());
console.log("---------num1 / num2 =>",adder.sub());
console.log("---------num1 * num2 =>",adder.multiplication());

