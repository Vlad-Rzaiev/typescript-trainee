import "./style.css";

function numAdd(num1: number, num2: number) {
  return num1 + num2;
}

console.log(numAdd(8, 5));

//Basic Types in TypeScript
type Order = {
  orderId: number;
  customerName: string;
  isDelivered: boolean;
};

function formatOrder(order: Order): string {
  return `Order ${order.orderId}: ${order.customerName} - ${
    order.isDelivered ? "Delivered" : "Pending"
  }`;
}

const order1 = {
  orderId: 111,
  customerName: "Heisenberg",
  isDelivered: false,
};

console.log(formatOrder(order1));

//Object Typisation in TypeScript
type User = {
  username: string;
  age: number;
  isActive: boolean;
};

function displayUserProfile(user: User): string {
  return `Username: ${user.username}, age: ${user.age}, Network status: ${
    user.isActive ? "Online" : "Offline"
  }`;
}

const user1 = {
  username: "Jesse",
  age: 27,
  isActive: true,
};

const user2 = {
  username: "Mike",
  age: 60,
  isActive: false,
};

console.log(displayUserProfile(user1));
console.log(displayUserProfile(user2));

//Array Typisation in TypeScript
function calculateTotal(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(calculateTotal([12, 14, 45, 21, 8]));

//Using the any Type in TypeScript
function logDetails(arg: any): void {
  console.log(`Argument: ${arg}, type - ${typeof arg}`);
}

logDetails("Hello, TypeScript!");
logDetails(42);
logDetails(true);
logDetails([1, 2, 3]);
logDetails({
  name: "Bob",
  age: 33,
  isOnline: true,
});

//Using the unknown Type in TypeScript
function parseJSON(jsonString: string): unknown {
  try {
    const result: unknown = JSON.parse(jsonString);
    if (typeof result === "object" && result !== null) {
      return result;
    }
  } catch (error) {
    console.log("Failed to parse JSON:", error);
  }
  return null;
}

const correctJson = '{"name":"John", "age":30}';
console.log(parseJSON(correctJson));
// const incorrectJson = "this is not a json";
// console.log(parseJSON(incorrectJson));

//Understanding Enums in TypeScript
enum VechicleType {
  Car = "Car",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
}

function getVechicleType(vechicle: VechicleType): string {
  return `The vechicle type is ${vechicle}`;
}

console.log(getVechicleType(VechicleType.Car));
console.log(getVechicleType(VechicleType.Truck));
console.log(getVechicleType(VechicleType.Motorcycle));

//Exploring Union Types in TypeScript
function inputFormat(input: string | number): string {
  if (typeof input === "number") {
    return input.toFixed(2);
  } else {
    return input.toUpperCase();
  }
}

console.log(inputFormat("BkdkdTTYc jjjec "));
console.log(inputFormat(3.1448895655415));

//Literal Types in TypeScript
function configureServer(
  environment: "development" | "staging" | "production"
): void {
  console.log(`Configuring server for the ${environment} environment.`);
}

configureServer("development");
// configureServer("complete");

// Return Types in TypeScript
function getUserId(username: string): number {
  return username.length;
}

console.log("Heisenberg length -", getUserId("Heisenberg"));

//Method in an Interface
interface Calculator {
  add(x: number, y: number): number;
}

class SimpleCalculator implements Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}

const myCalculator = new SimpleCalculator();
console.log(myCalculator.add(5, 3));

//Void Types in TypeScript
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!");

//Optional Parameters in an Interface
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

function displayProduct(product: Product): void {
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price.toFixed(2)}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  } else {
    console.log("No description available.");
  }
}

const apple = { id: 1, name: "Apple", price: 0.75 };
displayProduct(apple);
const Iphone = {
  id: 2,
  name: "Apple Iphone Pro Max",
  price: 2300.2484665,
  description: "Are you serious??",
};
displayProduct(Iphone);

//Never Type in TypeScript
// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("Ooo kurwa Bober!");

enum Role {
  ADMIN,
  USER,
}

console.log(Role.ADMIN);
console.log(Role[Role.USER]);
