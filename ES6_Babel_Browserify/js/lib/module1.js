"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arr = void 0;
exports.bar = bar;
exports.foo = foo;

function foo() {
  console.log('foo() module1');
}

function bar() {
  console.log('bar() module1');
}

let arr = [1, 2, 3];
exports.arr = arr;