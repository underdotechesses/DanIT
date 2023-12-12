/* 
 Теоретичні питання
 1. Що таке цикл в програмуванні?
 1. Цикл — разновидность управляющей конструкции в высокоуровневых языках программирования, предназначенная для организации многократного исполнения набора инструкций.

 2. Які види циклів є в JavaScript і які їх ключові слова?
 2. В языке JavaScript имеется четыре цикла: while, do/while, for и for/in.

 3. Чим відрізняється цикл do while від while?
 3. While — сначала проверь, потом сделай, и так по кругу.
 Do — сначала сделай, потом проверь, и так по кругу.
 Отличаются они только случаем, когда условие не выполняется: while не пройдёт, а do пройдёт один раз.

 Практичні завдання
 1. Запитайте у користувача два числа. 
 Перевірте, чи є кожне з введених значень числом. 
 Якщо ні, то запитуйте у користувача нове занчення до тих пір, поки воно не буде числом. 
 Виведіть на екран всі цілі числа від меншого до більшого за допомогою циклу for. 

 2. Напишіть програму, яка запитує в користувача число та перевіряє, 
 чи воно є парним числом. Якщо введене значення не є парним числом, 
 то запитуйте число доки користувач не введе правильне значення.

// 1.

do {
    firstNumber = prompt("Введите первое число");
    secondNumber = prompt("Введите второе число");
} while (isNaN(firstNumber) || isNaN(secondNumber));

if (firstNumber <= secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
        console.log(i);
    }
} else {
    for (let i = secondNumber; i <= firstNumber; i++) {
        console.log(i);
    }
}

// 2.

let num = prompt("Введите парное число");

while (num % 2 !== 0 || num !== 0) {
    alert("Вы ввели не парное число!");
    num = prompt("Введите парное число");
}

alert(num);

*/
