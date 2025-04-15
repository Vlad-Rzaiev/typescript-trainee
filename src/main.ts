import "./style.css";

function numAdd(num1: number, num2: number) {
  return num1 + num2;
}

console.log(numAdd(8, 5));

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

function calculateTotal(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(calculateTotal([12, 14, 45, 21, 8]));

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
