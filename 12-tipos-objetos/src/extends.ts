interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const mySquare: Square = { sideLength: 10, color: 'blue' };

interface Developer extends Person {
  code: () => void;
}

// Add your interface here
interface Person {
  name: string;
  hobbies: string[];
}

const me: Developer = {
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets'],
};

me.code();
