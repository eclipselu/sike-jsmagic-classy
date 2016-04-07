"use strict";

function extend(child, parent) {
	// copy static methods
	for (var key in parent) {
		if (Object.hasOwnProperty.call(parent, key)) {
			child[key] = parent[key];
		}
	}

	child.prototype.constructor = child;
	// setup prototype chain
	child.prototype.__proto__ = parent.prototype;
	//	Object.defineProperty(child.prototype, '__proto__', {'value': parent.prototype});

	return child;
}

function A() {}

A.prototype.a = function () {
	return 1;
};

function B() {}

B.prototype.b = function () {
	return 2;
};

extend(B, A);

var b = new B();
console.log(b.a()); // 1
console.log(b.b()); // 2

console.log(b instanceof B); // true
console.log(b instanceof A); // true
console.log(b.constructor === B); // true
console.log(b.constructor === A); // false