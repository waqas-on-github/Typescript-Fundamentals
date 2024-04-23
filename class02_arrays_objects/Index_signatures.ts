//Sometimes we need to represent a type for dictionaries, where values of a consistent type are
// retrievable by keys.



interface StringByString {
    [key: string]: string;
  }
  
  const heroesInBooks: StringByString = {
    'Gunslinger': 'The Dark Tower',
    'Jack Torrance': 'The Shining', 
    "jonn haris" : "how us concqer asia"
  };
  console.log(heroesInBooks.Gunslinger);


  // we also can do that 
  type StringByothers = {
    [key : string] : string | number
  }

  const bookStore : StringByothers ={
    "book_name " : "why we need to rethink Ai", 
    "price" :220,
    "quantity" : 4000
  }

  console.log(bookStore.book_name);
  console.log(bookStore.price);
  
  

  // index signatures caveats 
  //........ Non-existing properties
  interface StringByStrings {
    [key: string]: string |undefined
  }
  
  const object: StringByString = {};
  console.log(object.something);  // it should complain but itll do at runtime which defeating purpose of using ts 

  // fix use unions like     [key: string]: string | undefined

  // String and number key

  interface numberAsStringKey {
    [key : string] : string
  }

  const someObj : numberAsStringKey ={
    "1" :"someVal"
  }
  console.log(someObj[1]);  // this will work cuz of js coercion 


  // flexibility 

  interface Person {
  name: string;
  age: number;
  [key: string]: string | number | undefined;
}

const person: Person = {
  name: 'John',
  age: 30,
  // Additional optional properties
  address: '123 Main St',
};


// nested data strcture 
interface NestedData {
    id: number;
    data: {
      [key: string]: string | number;
    };
  }
  
  const nested: NestedData = {
    id: 1,
    data: {
      name: 'John',
      age: 30,
      // Additional properties added dynamically
    },
  };
  




