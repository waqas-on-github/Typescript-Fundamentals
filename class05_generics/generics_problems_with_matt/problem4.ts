// Should return an object where a -> first and b -> 

// const returnBothOfWhatIPassIn = (params: { a: unknown; b: unknown }) => {
    // return {
    //   first: params.a,
    //   second: params.b,
    // };
//   };
  
// solution 
const returnBothOfWhatIPassIn = <T, K> (params: { a:T; b:K }) => {
    return {
      first: params.a,
      second: params.b,
    };
  };
  
    const result = returnBothOfWhatIPassIn({
      a: "a",
      b: 1,
    });