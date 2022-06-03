// 1. Напишите функцию, которая может преобразовывать строку в число.

function myNumber(str) {
  let number = Number(str);
  return number;
}

console.log(typeof myNumber("30"));

// 2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает true иначе false.

function number(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(number(40));
console.log(number(17));

// 3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

function animals(list) {
  return list.includes();
}

let pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("elephant"));
