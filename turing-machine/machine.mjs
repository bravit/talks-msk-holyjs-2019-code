import { Tape } from "./tape.mjs";
import { TMProgram } from "./tm-program.mjs";

export class State {
  constructor(numberOfStates, finalState = -1) {
    this.numberOfStates = numberOfStates;
    this.finalState = finalState === -1 ? numberOfStates - 1 : finalState;
    this.current = 0;
  }
  set(n) {
    if (0 <= n && n < this.numberOfStates) this.current = n;
  }
  get() {
    return this.current;
  }
  isFinal() {
    return this.get() === this.finalState;
  }
}

export class TuringMachine {
  constructor(state, program) {
    this.tape = new Tape();
    this.state = state;
    this.program = program;
    this.stopped = false;
  }
  reset(inputWord) {
    this.state.set(0);
    this.stopped = false;
    this.tape.setWord(inputWord);
  }
  viewTape() {
    return this.tape.tape();
  }
  step() {
    if (this.stopped) return;
    let next = this.program.findRule(this.state.get(), this.tape.read());
    if (next === TMProgram.STOP) {
      this.stopped = true;
      return;
    }
    this.state.set(next.state);
    this.tape.write(next.symbol);
    this.tape.moveOn(next.dir);
  }
  run(inputWord) {
    this.reset(inputWord);
    while (!this.stopped) {
      //console.log(this.viewTape())
      this.step();
    }
    return this.state.isFinal();
  }
}
