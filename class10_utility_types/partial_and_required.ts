type User = {
    id: number;
    username?: string;
}

// this will make all variables required
type myUser = Required<User>

// this will make all variable unrequired

type myAnotherUser = Partial<myUser>