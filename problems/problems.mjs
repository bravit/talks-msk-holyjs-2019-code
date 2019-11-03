import { isPrime } from "./utils.mjs";

export const Answer = Object.freeze({
  YES: Symbol("YES"),
  NO: Symbol("NO")
});

export class DecisionProblem {
  constructor(name) {
    this.name = name;
  }
  solve(instance) {
    return undefined;
  }
  answer(instance) {
    return this.solve(instance) ? Answer.YES : Answer.NO;
  }
}

export class Lang extends DecisionProblem {
  constructor(gen, name) {
    super(name);
    this.gen = gen;
  }
  solve(instance) {
    for (let word of this.gen()) {
      if (word === instance) return true;
      // ГРЯЗНЫЙ ХАК!!!
      if (instance.length < word.length) return false;
    }
    return false;
  }
}
