var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(name, age) {
        var _this = this;
        this.age = 10; // now age property can not be assessed outside of this class
        this.eate = function (grassname) {
            // --> ^classes extend this class
            return ("cow has age ".concat(_this.age, " eated ").concat(grassname));
        };
        this.name = name;
        this.age = age;
    }
    animal.prototype.move = function (distance) {
        return ("".concat(this.name, " moved ").concat(distance));
    };
    ;
    return animal;
}());
var cow = new animal("myCow", 22);
cow.move(20);
console.log(cow.move(20));
// we can go further and we can extend classe to other classes
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.walk = function (distance) {
            var data = _super.prototype.move.call(_this, distance);
            return data;
        };
        return _this;
    }
    return dog;
}(animal));
var mydog = new dog("puppy", 10);
console.log(mydog.walk(22));
//
