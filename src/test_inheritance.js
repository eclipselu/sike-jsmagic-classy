var Class = require('./inheritance-infinite-recursion');

const A = Class({
  foo: function(n) {
    return n + n;
  }
});

const B = Class({
  foo: function(n) {
    return this.super("foo", n * n);
  }
}, A);

const C = Class({
  foo: function(n) {
    return this.super("foo", n * 10);
  }
}, B);

var c = new C();
console.log(c.foo(100));
console.log(c.foo(100));
