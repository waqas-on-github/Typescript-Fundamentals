// Should return an object of the arguments you pass
// const returnBothOfWhatIPassIn = (a: unknown, b: unknown) => {
//     return {
//       a,
//       b,
//     };
//   };
  
const returnBothOfWhatIPassIn = <A, B> (a:A, b:B) => {
    return {
      a,
      b,
    };
  };
  

const result = returnBothOfWhatIPassIn("a", 1);



