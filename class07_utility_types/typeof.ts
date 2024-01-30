const shape = {
    x:0, 
    y:0 , 
    z:0
}


// we want to make this typesafe 
// way 1 create type of interface 

// interface shapeType {
//      x : number ,
//      y: number,
//      z: number
// }

// 2nd way 

 type shapeType = typeof shape

// 3rd and shortest way

const creatshape : typeof shape = {
    x: shape.x+1,
    y: shape.y+2,
    z : shape.z+3
}


// another use case json api responce from backend 

const responce = {
    
        "status": "success",
        "data": {
          "id": 12345,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "age": 30,
          "city": "New York",
          "country": "USA"
        }
      
      
}

type responceType = typeof responce

// we will get this back 
// type responceType = {
//     status: string;
//     data: {
//         id: number;
//         name: string;
//         email: string;
//         age: number;
//         city: string;
//         country: string;
//     };

