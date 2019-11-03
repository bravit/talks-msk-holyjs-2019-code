import { logSolution } from "./problems/utils.mjs";
import { natWords, primeWords } from "./problems/generators.mjs";
import { Lang } from "./problems/problems.mjs";

let natLang = new Lang(natWords, "NatLang");
logSolution(natLang, "|||");
logSolution(natLang, "|javascript|");

let primesLang = new Lang(primeWords, "PrimesLang");
logSolution(primesLang, "|||");
logSolution(primesLang, "|||||");
logSolution(primesLang, "||||||");
