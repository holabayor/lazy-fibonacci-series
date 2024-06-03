function fibonacciGenerator(start = 0, end) {
  const cache = {};

  function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    }
    let result;
    if (n < 2) {
      result = n;
    } else {
      result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    cache[n] = result;
    return result;
  }

  function* generator() {
    // console.log('Generator runs');
    for (let n = start; n <= end; n++) {
      if (n >= start) {
        // console.log('The fibonacci of ', n, 'is', fibonacci(n));
        yield fibonacci(n);
      }
    }
  }

  return generator();
}

const fibGen = fibonacciGenerator(1, 12);

for (const num of fibGen) {
  console.log(num);
}
