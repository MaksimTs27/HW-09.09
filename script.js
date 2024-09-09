//Объекты и копирование объектов
//task 1
const person = {
  name: 'Maksim',
  age: 27,
  city: 'Moscow',
};
console.log(person);

//task 2

let original = {
  name: 'Maksim',
  age: 27,
  city: 'Moscow',
};
let copy = { ...original };
copy.city = 'Omsk';
console.log(original);
console.log(copy);

//task 3

const person2 = {
  name: 'Maksim',
  age: 27,
  city: 'Moscow',
};

let clone = Object.assign({}, person2);
clone.age = 22;
console.log(person2);
console.log(clone);

//Опциональная цепочка
//task 1

let user = {
  computer: 'laptop',
  id: 21412532143213124,
  city: 'Munich',
};

console.log(user?.city);

//task 2

let location = {
  id: 677868213124,
  place: {
    country: 'Germany',
    city: 'Munich',
    zip: 95738,
  },
};
console.log(location?.place?.zip);

//task 3

const data = {
  items: [4, 6, 10],
};
console.log(data.items ? data.items[0] : null);

//Object.keys, .values, .entries
//task 1
const person3 = {
  name: 'Maksim',
  age: 27,
  city: 'Moscow',
};
console.log(Object.keys(person3));

//task 2
const car = {
  horsePower: 120,
  color: 'Blue',
  design: ' ',
  sizeOfWheels: 22,
};
console.log(Object.values(car));

//task 3
const carNew = {
  horsePower: 120,
  color: 'Blue',
  design: ' ',
  sizeOfWheels: 22,
};
console.log(Object.entries(carNew));

//Формат JSON
//task 1

const user2 = {
  name: 'Maksim',
  surname: 'Tsedilin',
};
let user2Json = JSON.stringify(user2);
console.log(user2Json);

//task 2
let user2JsonReturn = JSON.parse(user2Json);
console.log(user2JsonReturn);

//task 3

let locationNew = {
  id: 677868213124,
  place: {
    country: 'Germany',
    city: 'Munich',
    zip: 95738,
  },
};

let loc = JSON.stringify(locationNew);
console.log(loc);

let locNew = JSON.parse(loc);
console.log(locNew);

//немного не понял задания , сделал как понял

//Массивы и методы массивов
//task 1

let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

//task 2
let number = [2, 4, 8, 9, 12];
let funcNumber = number.map((e) => e ** 2);
console.log(funcNumber);

//task 3
let newNumber = [4, 7, 9, 4, 2, 6, 8, 3, 63, 2356, 2];
let funcNewNumber = newNumber.filter((e) => e % 2 === 0);
console.log(funcNewNumber);

//Деструктуризация и деструктурирующее присваивание
//task 1

let person5 = {
  name: 'maksim',
  age: 27,
};
let { name, age } = person5;

//task 2

let arr = ['apple', 'banana', 'pear'];
let [first, second] = arr;

//task 3
let person10 = {};

let { name2 = 'Maksim', age2 = 27 } = person10;
