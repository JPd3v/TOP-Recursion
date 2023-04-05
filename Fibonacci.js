function fibs(n) {
  const results = [0, 1];
  let firstNumber = 0;
  let secondNumber = 1;

  if (n <= 2) {
    return results.splice(0, n);
  }

  for (let i = 2; i < n; i++) {
    const currentFibonacci = firstNumber + secondNumber;
    results.push(currentFibonacci);
    firstNumber = secondNumber;
    secondNumber = currentFibonacci;
  }
  return results;
}

function fibsRecursive(n) {
  if (n <= 0 || !n) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prevFibs = fibsRecursive(n - 1);
    const currentFibonacci = prevFibs[n - 2] + prevFibs[n - 3];
    return [...prevFibs, currentFibonacci];
  }
}
