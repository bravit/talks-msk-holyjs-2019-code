import { Answer, Lang } from "./problems/problems.mjs";
import { natWords, primeWords } from "./problems/generators.mjs";
import { logSolution, unary2nat, nat2unary } from "./problems/utils.mjs";

function* zipGens(gen1, gen2, delim) {
  let cont = true;
  let words1 = gen1();
  let words2 = gen2();
  do {
    let r1 = words1.next();
    let r2 = words2.next();
    yield r1.value + delim + r2.value;
    cont = !(r1.done || r2.done);
  } while (cont);
}

class ZippedLang extends Lang {
  constructor(lang1, lang2, delim, name) {
    super(() => zipGens(lang1.gen, lang2.gen, delim), name);
  }
}

let natLang = new Lang(natWords, "NatLang");
let primesLang = new Lang(primeWords, "PrimesLang");
let enumeratedPrimesLang = new ZippedLang(
  natLang,
  primesLang,
  "#",
  "EnumeratedPrimesLang"
);

logSolution(enumeratedPrimesLang, "||#|||");

function computePrimeNumber(k) {
  let kword = nat2unary(k);
  for (let n of natWords()) {
    let test = kword + "#" + n;
    if (enumeratedPrimesLang.answer(test) === Answer.YES) return unary2nat(n);
  }
}

let k = 4;
console.log(`Computing ${k}-th prime number: ${computePrimeNumber(k)}`);
