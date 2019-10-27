import {TMProgram} from "./turing-machine/tm-program.mjs"
import {MoveEnum} from "./turing-machine/tape.mjs";
import {State, TuringMachine} from "./turing-machine/machine.mjs";
import {TMLang} from "./turing-machine/lang.mjs";
import {logSolution} from "./problems/utils.mjs";

let loopingOnZeros = new TMProgram(
    [{from:{symbol: '0', state: 0},
        to: {symbol: '0', state: 1, dir: MoveEnum.RIGHT}}
        ,{from:{symbol: '0', state: 1},
        to: {symbol: '0', state: 0, dir: MoveEnum.LEFT}}
    ]
);
let loopingProblem = new TMLang(
    new TuringMachine(new State(3, 2), loopingOnZeros),
    "looping");
logSolution(loopingProblem, "11");
logSolution(loopingProblem, "0");
//logSolution(loopingProblem, "00");