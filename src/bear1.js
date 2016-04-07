var Animal, Bear,
  extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key)) {
        child[key] = parent[key];
      }
    }

    // function Ctor() {
    //   this.constructor = child;
    // }
    // Ctor.prototype = parent.prototype;
    // child.prototype = new Ctor();

    // javascript does this automatically when invoking var foo = new child() ?
    child.prototype.constructor = child;

    child.prototype.__proto__ = parent.prototype;

    child.__super__ = parent.prototype;
    return child;
  },
  hasProp = {}.hasOwnProperty;

Animal = (function() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.move = function(meters) {
    return console.log(this.name + (" moved " + meters + "m."));
  };

  return Animal;

})();

Bear = (function(superClass) {
  extend(Bear, superClass);

  function Bear() {
    return Bear.__super__.constructor.apply(this, arguments);
  }

  Bear.prototype.move = function() {
    console.log("Dancing...");
    return Bear.__super__.move.call(this, 1);
  };

  return Bear;

})(Animal);

// ---
// generated by coffee-script 1.9.2
