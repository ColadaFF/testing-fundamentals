function expect(actual) {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`${actual} is not equal ${expected}`);
      }
    }
  };
}

async function test(name, callback) {
  try {
    await callback();
    console.log(`Success: ${name}`);
  } catch (e) {
    console.log(e);
    console.log(`Failed: ${name}`);
  }
}

module.exports = {
  test,
  expect
};
