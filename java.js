var num1 = parseFloat(prompt("Введіть перше число:"));

// Запитуємо користувача про операцію
var operation = prompt("Виберіть операцію: +, -, *, /");

// Запитуємо друге число
var num2 = parseFloat(prompt("Введіть друге число:"));



// Виконуємо відповідну операцію та відображаємо результат
if (operation === "+") {
  alert("Результат: " + (num1 + num2));
} else if (operation === "-") {
  alert("Результат: " + (num1 - num2));
} else if (operation === "*") {
  alert("Результат: " + (num1 * num2));
} else if (operation === "/") {
  alert("Результат: " + (num1 / num2));
} else {
  alert("Ви ввели неправильну операцію!");
}