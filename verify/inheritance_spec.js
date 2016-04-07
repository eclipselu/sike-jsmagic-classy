"use strict";
const assert = require("chai").assert;
const Class = require("../");

describe("Implement Methods Inheritance", function() {
  const A = Class({
    a: function() {
      return 1;
    }
  });

  const B = Class({
    b: function() {
      return 2;
    }
  }, A);

  const b = new B();
  const a = new A();

  describe("b", function() {
    it("constructor should be B", function() {
      assert(b.constructor === B);
    });

    it("should be an instance of A", function() {
      assert(b instanceof A);
    });

    it("should be an instance of B", function() {
      assert(b instanceof B);
    });

    it("should be able to call method `a` through inheritance", function() {
      assert.equal(b.a(), 1);
    });

    it("should not have method `a` defined directly on the object", function() {
      assert(b.hasOwnProperty("a") === false);
    });

    it("should not have method `a` defined directly on the prototype of B", function() {
      assert(b.__proto__.hasOwnProperty("a") === false);
    });
  });
});

describe("Implement Class __super__", function() {
  var A = Class({
    a: function() {
      return 1;
    }
  });

  var B = Class({
    b: function() {
      return 2;
    }
  }, A);

  it("should set the __super__ class property to the parent class", function() {
    assert.equal(B.__super__, A);
  });

  it("should set Object as the default __super__ class", function() {
    assert.equal(A.__super__, Object);
  });
});

describe("Implement Super call", function() {
  const A = Class({
    foo: function(a, b) {
      return [this.n, a, b];
    },

    bar: function() {
      return 1;
    },

    self: function() {
      return this;
    }
  });

  const B = Class({
    foo: function(a, b) {
      return this.super("foo", a * 10, b * 100);
    },

    bar: function() {
      return 20 + this.super("bar");
    },

    self: function() {
      return this.super("self");
    }
  }, A);

  const C = Class({
    foo: function(a, b) {
      return this.super("foo", a * 10, b * 100);
    }
  }, B);

  const b = new B();
  b.n = 1;

  it("should define the `super` method", function() {
    assert.isFunction(b.__proto__.super);
  });

  it("should be able to call super method without arguments", function() {
    assert.equal(b.bar(), 21);
  });

  it("should call super method with the correct `this` context", function() {
    assert.equal(b.self(), b);
  });

  it("should be able to call super method with multiple arguments", function() {
    assert.deepEqual(b.foo(2, 3), [1, 20, 300])
  });

});

describe("Implement Super's Super", function() {
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

  it("should be able to call super's super", function() {
    const c = new C();

    assert.equal(c.foo(1), 200);
  });

  it("should be able to call the super method multiple times", function() {
    const c = new C();

    assert.equal(c.foo(1), 200);
    assert.equal(c.foo(1), 200);
  });
});
