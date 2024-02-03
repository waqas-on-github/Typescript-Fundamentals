

// return type of data what i passed in 
// const returnWhatIPassIn = (t: unknown) : unknown => {
//     return t;
//   };


// solution 

const returnWhatIPassIn = <Type> (t : Type) :Type => {
    return t
}

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");