export const MoveEnum = Object.freeze({
  LEFT: -1,
  STAY: 0,
  RIGHT: 1
});

export class Tape {
  constructor(inputWord = "", blank = "_") {
    this.setWord(inputWord);
    this.blank = blank;
  }
  setWord(inputWord) {
    this.right = [...(inputWord !== "" ? inputWord : "" + this.blank)];
    this.left = [];
    this.idx = 0;
  }
  word() {
    return this.left.reverse().join("") + this.right.join("");
  }
  tape() {
    return (
      this.word() +
      "\n" +
      " ".repeat(this.left.length + this.idx) +
      "^" +
      " ".repeat(this.right.length - this.idx)
    );
  }
  fullIdx() {
    return this.idx >= 0
      ? { arr: this.right, idx: this.idx }
      : { arr: this.left, idx: Math.abs(this.idx + 1) };
  }
  read() {
    let ix = this.fullIdx();
    return ix.arr[ix.idx];
  }
  write(symbol) {
    let ix = this.fullIdx();
    ix.arr[ix.idx] = symbol;
  }
  moveLeft() {
    this.idx -= 1;
    if (Math.abs(this.idx + 1) === this.left.length) this.left.push(this.blank);
  }
  moveRight() {
    this.idx += 1;
    if (this.idx === this.right.length) this.right.push(this.blank);
  }
  moveOn(dx) {
    switch (dx) {
      case MoveEnum.LEFT:
        this.moveLeft();
        break;
      case MoveEnum.RIGHT:
        this.moveRight();
        break;
      default:
      // do nothing
    }
  }
}
