import { TMProgram } from "./turing-machine/tm-program.mjs";
import { MoveEnum } from "./turing-machine/tape.mjs";
import { State, TuringMachine } from "./turing-machine/machine.mjs";
import { TMLang } from "./turing-machine/lang.mjs";
import { logSolution } from "./problems/utils.mjs";

let allOnes = new TMProgram([
  {
    from: { symbol: "1", state: 0 },
    to: { symbol: "1", state: 0, dir: MoveEnum.RIGHT }
  },
  {
    from: { symbol: "_", state: 0 },
    to: { symbol: "_", state: 1, dir: MoveEnum.LEFT }
  }
]);

let allOnesLang = new TMLang(
  new TuringMachine(new State(2), allOnes),
  "AllOnes"
);

logSolution(allOnesLang, "1");
logSolution(allOnesLang, "0");
logSolution(allOnesLang, "");
logSolution(allOnesLang, "111");
logSolution(allOnesLang, "111011");
logSolution(allOnesLang, "111111");
