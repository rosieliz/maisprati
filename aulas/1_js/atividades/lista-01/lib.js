/**
 * Reads user input until a valid number is informed. Empty input is considered as 0.
 * @param {string} msg - Message to display on prompt
 * @returns number
 */
function readInputUntilValidNumber(msg) {
  do {
    const input = prompt(msg);
    const parsedInput = Number(input);

    if (typeof parsedInput === "number" && !isNaN(parsedInput)) {
      return parsedInput;
    }
    console.log("\nInsira um número valido.\n========================\n");
  } while (true);
}

/**
 * Sums every number in a list.
 * @param {number[]} nums - The list of numbers to sum.
 * @returns number
 */
function sum(nums) {
  return nums.reduce((accumulative, current) => accumulative + current);
}

/**
 * Calculates the average value from a list of numbers.
 * @param {number[]} list - The list of numbers to calculate.
 * @returns number
 */
function average(list) {
  return sum(list) / list.length;
}

/**
 * Groups multiple arrays into positioned arrays.
 * @param {any[]} ...arguments - The lists to iterate on
 * @returns any[]
 */
function zip() {
  let args = [].slice.call(arguments);
  const shortest = args.length == 0 ? []
    : args.reduce((a, b) => a.length < b.length ? a : b);
  return shortest.map((_, i) => args.map(arr => arr[i]));
}

/**
 * Divides back positioned arrays resulted from `zip`.
 * @param {any[]} arr - The lists to iterate on
 * @returns any[]
 */
function unzip(arr) {
  return arr.reduce(
    (acc, cur) => (cur.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(_ => [])
  );
}

/**
 * Generate a random number.
 * @param {number}  min       - Minimum value
 * @param {number}  max       - Maximum value
 * @param {boolean} inclusive - Should include max value or not
 * @param {boolean} float     - Should be a float number or not
 * @returns number
 */
function random(min, max, inclusive = false, float = false) {
  const extra = inclusive ? 1 : 0;
  let rand = Math.random() * (max - min + extra) + min;
  if (!float) {
    rand = Math.floor(rand);
  }
  return rand;
}

export {
  readInputUntilValidNumber,
  sum,
  average,
  zip,
  unzip,
  random,
};
