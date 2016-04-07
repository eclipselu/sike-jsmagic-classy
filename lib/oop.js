'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
	function Animal(name) {
		_classCallCheck(this, Animal);

		this.name = name;
	}

	_createClass(Animal, [{
		key: 'move',
		value: function move(meters) {
			console.log(this.name + ' moved ' + meters + 'm.');
		}
	}]);

	return Animal;
}();

var Bear = function (_Animal) {
	_inherits(Bear, _Animal);

	function Bear() {
		_classCallCheck(this, Bear);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, 'Bear'));
	}

	_createClass(Bear, [{
		key: 'move',
		value: function move() {
			console.log("Dancing...");
			_get(Object.getPrototypeOf(Bear.prototype), 'move', this).call(this, 2);
		}
	}]);

	return Bear;
}(Animal);

var Monkey = function (_Animal2) {
	_inherits(Monkey, _Animal2);

	function Monkey() {
		_classCallCheck(this, Monkey);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Monkey).call(this, 'Monkey'));
	}

	_createClass(Monkey, [{
		key: 'move',
		value: function move() {
			console.log("Swinging...");
			_get(Object.getPrototypeOf(Monkey.prototype), 'move', this).call(this, 5);
		}
	}]);

	return Monkey;
}(Animal);

var monkey = new Monkey();
var bear = new Bear();

monkey.move();
bear.move();