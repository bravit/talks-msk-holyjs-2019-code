/*
 The SAT solver we use here was implemented by Gregory J. Duck.
 See https://www.comp.nus.edu.sg/~gregory/sat/ for details.
 */

import {satSolve} from './complexity/SAT.mjs'
import {DecisionProblem} from "./problems/problems.mjs";
import {logSolution} from "./problems/utils.mjs";

class SATLang extends DecisionProblem {
    solve(instance) {
        return satSolve(instance.size, instance.clauses)
    }
}

let satLang = new SATLang("SATLang");
let instance = {
    size: 3,
    clauses: [[1, -3], [2, 3, -1]],
    toString: () => "(x1 OR -x3) AND (x2 OR x3 OR -x1)"
};

logSolution(satLang, instance);