const calculator = require("../code/calculator");

it('should add number', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

it('should substract number', () => {
  expect(calculator.sub(4, 2)).toBe(2);
});

it('should multiply number', () => {
  expect(calculator.mul(3, 3)).toBe(9);
});

it('should divide number', () => {
  expect(calculator.div(10, 2)).toBe(5);
});