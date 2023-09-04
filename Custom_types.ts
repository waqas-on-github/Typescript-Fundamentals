// Define a custom type 'user'
type User = {
    name: string;
    password: number;
    isPaid: boolean;
}

// Extend the 'user' type to create a new type 'admin'
type Admin = User & {
    isAdmin: boolean;
}

// Create an object 'user' based on the 'User' type
const regularUser: User = {
    name: "waqas",
    password: 12345,
    isPaid: false
}

// Log the 'name' property of the 'User' object
console.log(regularUser.name);

// Create an object 'admin' based on the 'Admin' type
const adminUser: Admin = {
    name: "waqas",
    password: 123456,
    isPaid: true,
    isAdmin: true
}

// Log the 'isAdmin' property of the 'Admin' object
console.log(adminUser.isAdmin);

// Export an empty object (no actual export needed in this code)
export {}
