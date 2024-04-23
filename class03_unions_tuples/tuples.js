// tuples are strctured types in array
var myTuple;
myTuple = ['str', "str", 22, true];
// but tuples can be cheated by popin an pushing items like 
myTuple.push(22);
myTuple.pop();
myTuple.pop();
myTuple.pop();
myTuple.pop();
myTuple.length;
// how to fix 
var anotherTuple = [22, "hello"];
