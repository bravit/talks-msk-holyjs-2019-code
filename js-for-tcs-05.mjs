import { DecisionProblem, Answer } from "./problems/problems.mjs";
import { logSolution } from "./problems/utils.mjs";

class EvenLengthProblem extends DecisionProblem {
  solve(instance) {
    return instance.length % 2 === 0;
  }
}

let evenLengthProblem = new EvenLengthProblem("EvenLengthProblem");
logSolution(evenLengthProblem, "abc");
logSolution(evenLengthProblem, "abcd");

class EvenNumberProblem extends DecisionProblem {
  solve(instance) {
    return instance % 2 === 0;
  }
}

let evenNumberProblem = new EvenNumberProblem("EvenNumberProblem");
logSolution(evenNumberProblem, 3);
logSolution(evenNumberProblem, 4);

function evenLength2evenNumber(from) {
  return from.length;
}

import { strict as assert } from "assert";

function testReduction(pr1, pr2, reduce, inst1) {
  let instance2 = reduce(inst1);
  assert.ok(pr1.answer(inst1) === pr2.answer(instance2));
}

for (let inst of ["abc", "abcd", "", "!!!"]) {
  testReduction(
    evenLengthProblem,
    evenNumberProblem,
    evenLength2evenNumber,
    inst
  );
}

class ComplementProblem extends DecisionProblem {
  constructor(problem, name) {
    super(name);
    this.problem = problem;
  }
  answer(instance) {
    return this.problem.answer(instance) === Answer.YES
      ? Answer.NO
      : Answer.YES;
  }
}

let oddLengthProblem = new ComplementProblem(
  evenLengthProblem,
  "OddLengthProblem"
);

logSolution(oddLengthProblem, "abc");
logSolution(oddLengthProblem, "abcd");
