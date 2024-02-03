

// Should ONLY allow strings to be passed in
// const returnWhatIPassIn = <T>(t: T) => t;

 const returnWhatIPassIn = <T extends string>(t: T) => t;

 returnWhatIPassIn("hell0")
 returnWhatIPassIn(22) // ---> will throw error 