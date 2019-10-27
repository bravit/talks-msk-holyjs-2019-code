export
class TMProgram {
    static STOP;
    constructor(rules) {
        this.rules = rules
    }
    findRule(state, symbol) {
        for(let r of this.rules) {
            if(r.from.state === state && r.from.symbol === symbol)
                return r.to
        }
        return TMProgram.STOP
    }
}
