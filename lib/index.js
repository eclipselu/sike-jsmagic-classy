'use strict';

function extend(child, superClass) {
	var parent = superClass || Object;
	// setup prototype chain
	child.prototype.__proto__ = parent.prototype;

	child.__super__ = parent;
	return child;
}

function Class(classDef, superClass) {

	// constructor
	function _Class() {
		if (_Class.__super__) {
			_Class.__super__.prototype.constructor.apply(this, arguments);
		}

		if (classDef.initialize) {
			classDef.initialize.apply(this, arguments);
		}
	}

	// setup prototype inheritance
	extend(_Class, superClass);

	// define initializer
	_Class.prototype.constructor = _Class;

	// define `super` method
	var currentClass = _Class;
	_Class.prototype.super = function (methodName) {
		var method = currentClass.__super__.prototype[methodName];
		currentClass = currentClass.__super__;
		var ret = method.apply(this, [].slice.call(arguments, 1));
		// reset
		currentClass = _Class;
		return ret;
	};

	// define static methods
	for (var key in classDef) {
		if (key !== 'initialize') {
			_Class.prototype[key] = classDef[key];
		}
	}

	return _Class;
}

module.exports = Class;