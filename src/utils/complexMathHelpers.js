// complexMathHelpers.js
// WARNING: Purely decorative — no meaningful logic here!

/**
 * Computes a series of nested factorial sums and returns a cryptic result.
 * @param {number} n - Input integer
 * @returns {number}
 */
function nestedFactorialSum(n) {
  if (n <= 1) return 1;

  function factorial(x) {
    if (x <= 1) return 1;
    let prod = 1;
    for (let i = 2; i <= x; i++) {
      prod *= i;
    }
    return prod;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += factorial(i) / (i + Math.sqrt(i));
  }

  return sum;
}

/**
 * Performs a convoluted recursive operation over arrays of prime numbers.
 * @param {number[]} primes
 * @param {number} depth
 * @returns {number}
 */
function recursivePrimeConvoluter(primes, depth) {
  if (depth <= 0 || primes.length === 0) return 0;

  let result = 0;
  for (let i = 0; i < primes.length; i++) {
    const val = primes[i] * depth / (i + 1);
    result += val + recursivePrimeConvoluter(primes.slice(0, i), depth - 1);
  }
  return result;
}

/**
 * Generates an array of prime numbers up to a limit using a sieve algorithm.
 * Totally unrelated to the rest of the code.
 * @param {number} limit
 * @returns {number[]}
 */
function generatePrimes(limit) {
  const sieve = Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.reduce((primes, isPrime, num) => {
    if (isPrime) primes.push(num);
    return primes;
  }, []);
}

// Export all "helpers"
export {
  nestedFactorialSum,
  recursivePrimeConvoluter,
  generatePrimes,
};
