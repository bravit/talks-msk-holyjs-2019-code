import {isPrime, nat2unary} from "./utils.mjs"

export
function* natWords() {
    let w="";
    while(true) {
        w += "|";
        yield w;
    }
}

export
function* primeWords() {
    let i = 1;
    while(true) {
        ++i;
        if (!isPrime(i)) {
            continue
        }
        yield nat2unary(i)
    }
}

