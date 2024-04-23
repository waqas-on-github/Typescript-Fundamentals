type User = {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
}

// picking types from one created type 
type myUser = Pick<User, 'id' | 'username' | 'email'>

const me: myUser = {
    id: 22,
    username: "waqas",
    email: "waqas@gmail.com"
}

// omiting  types from one created type 
type myUser2 = Omit<User, 'id' | 'createdAt'>

const anotherUser: myUser2 = {
    username: "waqas",
    email: "waqas@gmail.com",
    isAdmin: true,
}


// making whole object readonly 
const myanotherUser: Readonly<User> = {

    id: 1,
    createdAt: new Date(),
    email: "mail",
    isAdmin: false,
    username: 'waqas'


} 


// myanotherUser.createdAt = new Date() + 122  


// make optional type to required 
interface Props {
    a?: number;
    b?: string;
  }
  
const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 , b :'asda' };


