/* 
Теоретичні питання
1. Опишіть своїми словами, що таке метод об'єкту
1. Метод - функция, связанная с объектом.

2. Який тип даних може мати значення властивості об'єкта?
2. Значення можуть бути будь-якого типу.

3. Об'єкт це посилальний тип даних. Що означає це поняття?
3.  Посилальний тип – це особливий “посередницький” внутрішній тип, який використовується з метою передачі інформації від крапки.

Практичні завдання
1. Створіть об'єкт product з властивостями name, price та discount. Додайте метод для виведення повної ціни товару з урахуванням знижки. Викличте цей метод та результат виведіть в консоль.

2. Напишіть функцію, яка приймає об'єкт з властивостями name та age, і повертає рядок з привітанням і віком, 
наприклад "Привіт, мені 30 років". Попросіть користувача ввести своє ім'я та вік 
за допомогою prompt, і викличте функцію з введеними даними. Результат виклику функції виведіть з допомогою alert.

3.Опціональне. Завдання:
Реалізувати повне клонування об'єкта. 

Технічні вимоги:
- Написати функцію для рекурсивного повного клонування об'єкта (без єдиної передачі за посиланням, внутрішня вкладеність властивостей об'єкта може бути досить великою).
- Функція має успішно копіювати властивості у вигляді об'єктів та масивів на будь-якому рівні вкладеності.
- У коді не можна використовувати вбудовані механізми клонування, такі як функція Object.assign() або spread.

// 1.

const product = {
    name: "Lenovo",
    price: 2999,
    discount: 500,

    showPrice: function () {
        console.log(this.price - this.discount);
    },
};

product.showPrice();

// 2.

const getUserData = function () {
    const userName = prompt("Введите ваше имя");
    const userAge = +prompt("Введите ваш возраст");

    const userData = {
        userName,
        userAge,
        showGreeting: function () {
            alert(`Привіт, мені ${this.userAge} років`);
        },
    };
    return userData;
};

const user1 = getUserData();
user1.showGreeting();

*/

// 3.

const userData = {
    name: "Ivan",
    age: 30,
    job: "lawyer",
    birthday: {
        day: 12,
        month: 12,
        year: 1999,
    },
};

function cloneObject(obj) {
    const cloneObject = {};
    for (const key in obj) {
        cloneObject[key] = obj[key];

        for (const value in obj[key]) {
            cloneObject[key][value] = obj[key][value];
        }
    }
    console.log(cloneObject);
}

cloneObject(userData);
