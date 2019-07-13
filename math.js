const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const addAsync = (a, b) => Promise.resolve(a + b);

module.exports = {
  add,
  subtract,
  addAsync
};
