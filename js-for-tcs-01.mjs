import {isPrime, logSolution} from "./problems/utils.mjs"
import {DecisionProblem} from "./problems/problems.mjs";

class PrimalityTest extends DecisionProblem {
    constructor() {
        super("PrimalityTest")
    }
    solve(instance) {
        return isPrime(instance)
    }
}

let primalityTest = new PrimalityTest();

logSolution(primalityTest, 3);
logSolution(primalityTest, 5);
logSolution(primalityTest, 6);
logSolution(primalityTest, 1031);
