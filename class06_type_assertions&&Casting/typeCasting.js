// ther is  no way to do type casting in ts but we can use js type coersion to do 
var num;
num = '1222';
console.log(typeof num);
// use its a s number 
num = Number(num);
console.log(typeof num);
