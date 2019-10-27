import { strict as assert } from 'assert';

import {Tape} from "./tape.mjs"

let t = new Tape("hello");
assert.equal(t.word(), "hello");
t.moveLeft();
t.write('!');
t.moveRight();
t.moveRight();
t.moveRight();
t.moveRight();
t.moveRight();
t.moveRight();
t.write('!');
assert.equal(t.word(), "!hello!");

import { State } from "./machine.mjs"

let s = new State(3);
s.set(2);
assert.equal(s.get(), 2);
s.set(3);
assert.equal(s.get(), 2);
assert.ok(s.isFinal());