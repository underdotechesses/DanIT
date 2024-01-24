/* Теоретичні питання
1. Як можна оголосити змінну у Javascript?
1. С помощью "let", "const", "var".

2. Що таке рядок (string) і як його створити (перерахуйте всі можливі варіанти)?
2. "string" - тип данных, с помощью которого мы можем вывести текст. Чтоб создать переменную типа "string", нужно задать значение переменной в ковычках.
let text = "hello world";
let text = 'hello world';
let text = `hello world`;
let text = "hello world";

3. Як перевірити тип даних змінної в JavaScript?
С помощью оператора "typeof".

4. Поясніть чому '1' + 1 = 11.
'1' + 1 = '11';
Используя оператор "+" получаем строчный результат.

Практичні завдання
1. Оголосіть змінну і присвойте в неї число. Перевірте, чи ця змінна має тип "number" і виведіть результат в консоль.

2. Оголосіть змінну name і присвойте їй ваше ім'я. Оголосіть змінну lastName і присвойте в неї Ваше прізвище.
Виведіть повідомлення у консоль у форматі `Мене звати {ім'я}, {прізвище}` використовуючи ці змінні.

3. Оголосіть змінну з числовим значенням і виведіть в консоль її значення всередині рядка.
*/

// 1.
let number1 = 1;
console.log(typeof number1);

// 2.
let name = "Mykola";
let lastName = "Marchenko";
console.log(`Мене звати ${name}, ${lastName}`);

// 3.
let number3 = 1;
console.log(`                   ${number3}`);