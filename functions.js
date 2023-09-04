"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
add(2, 2);
// higher order functions 
var arr = [1, 2, 3];
arr.map(function (num) {
    return num + 1;
});
// if function wannna return nothing 
function handleerror(err) {
    throw new Error(err.message);
}
