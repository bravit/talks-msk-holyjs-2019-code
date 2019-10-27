import {DecisionProblem} from "../problems/problems.mjs";

export
class TMLang extends DecisionProblem {
    constructor(tm, name) {
        super(name);
        this.tm = tm
    }
    solve(instance) {
        return this.tm.run(instance)
    }
}