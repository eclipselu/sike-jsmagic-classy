"use strict";

var Class = require('./index');

const A = Class({
  name: "A",
  foo: function(n) {
    return n + n;
  }
});

const B = Class({
  name: "B",
  foo: function(n) {
    return this.super("foo", n * n);
  }
}, A);

const C = Class({
  name: "C",
  foo: function(n) {
    return this.super("foo", n * 10);
  }
}, B);

var c = new C();
c.foo(1);