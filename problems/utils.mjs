export function isPrime(n) {
  for (var i = 2; i <= n / 2; ++i) if (n % i === 0) return false;
  return true;
}

export function logSolution(problem, instance) {
  let answer = problem.answer(instance).description;
  console.log(`${problem.name}: answer for "${instance}" is ${answer}`);
}

export function nat2unary(n) {
  return "|".repeat(n);
}

export function unary2nat(n) {
  return n.length;
}
