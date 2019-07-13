const { add, subtract, addAsync } = require("./math");

test("Substract works!", () => {
  expect.assertions(4);

  const result = add(3, 7); // 10
  const expected = 10;
  expect(result).toBe(expected);
  expect(result).toBe(expected);
  expect(result).toBe(expected);
  expect(result).toBe(expected);
});

test("Add works!", () => {
  const result = subtract(7, 4); // 3
  const expected = 3;
  expect(result).toBe(expected);
});

test("add Async", async () => {
  const result = await addAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

function createUser() {
  return {
    name: "Cristian",
    age: 23
  };
}

test("Object is equal", () => {
  const user = createUser();
  const user2 = createUser();
  expect(user).not.toBe(user2);
});

test("Compare array contains value", () => {
  const actual = [1, 2, 3];
  const expected = 2;

  expect(actual).toContain(expected);
});

// npx jest
