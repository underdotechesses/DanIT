/*
Теоретичне питання

1. Поясніть своїми словами, як ви розумієте, що таке деструктуризація і навіщо вона потрібна.
1. Деструктуризация позволяет нам переназначать выборочные данные с массивов или объектов на переменные для более удобного использования.

Усі завдання потрібно виконати, використовуючи синтаксис деструктуризації

Примітка
Усі завдання мають бути виконані на "чистому" JavaScript без використання бібліотек типу jQuery або React.
*/

/*
Завдання 1
Дві компанії вирішили об'єднатись, і для цього їм потрібно об'єднати базу даних своїх клієнтів.
У вас є 2 масиви рядків, у кожному з них – прізвища клієнтів. Створіть на їх основі один масив, який буде об'єднання двох масивів без повторюваних прізвищ клієнтів.
*/

const clients1 = [
    "Гилберт",
    "Сальваторе",
    "Пирс",
    "Соммерс",
    "Форбс",
    "Донован",
    "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

const [...clientsData] = clients1;

clients2.forEach((elem) => {
    if (!clientsData.includes(elem)) {
        clientsData.push(elem);
    }
});

console.log(clientsData);

/*
Завдання 2
Перед вами массив characters, що складається з об'єктів. Кожен об'єкт описує одного персонажа.
Створіть на його основі масив charactersShortInfo, що складається з об'єктів, у яких є тільки 3 поля - ім'я, прізвище та вік.
*/

const characters = [
    {
        name: "Елена",
        lastName: "Гилберт",
        age: 17,
        gender: "woman",
        status: "human",
    },
    {
        name: "Кэролайн",
        lastName: "Форбс",
        age: 17,
        gender: "woman",
        status: "human",
    },
    {
        name: "Аларик",
        lastName: "Зальцман",
        age: 31,
        gender: "man",
        status: "human",
    },
    {
        name: "Дэймон",
        lastName: "Сальваторе",
        age: 156,
        gender: "man",
        status: "vampire",
    },
    {
        name: "Ребекка",
        lastName: "Майклсон",
        age: 1089,
        gender: "woman",
        status: "vempire",
    },
    {
        name: "Клаус",
        lastName: "Майклсон",
        age: 1093,
        gender: "man",
        status: "vampire",
    },
];

const charactersShortInfo = characters.map((elem) => {
    let { gender: gender, status: status, ...args } = elem;
    return { ...args };
});

console.log(charactersShortInfo);

/*
Завдання 3
У нас є об'єкт' user:
Напишіть деструктуруюче присвоєння, яке:

властивість name присвоїть в змінну ім'я
властивість years присвоїть в змінну вік
властивість isAdmin присвоює в змінну isAdmin false, якщо такої властивості немає в об'єкті

Виведіть змінні на екран.
*/

const user1 = {
    name: "John",
    years: 30,
};

const destructure = ({ name, years, isAdmin = false }) => {
    user1.name = name;
    user1.years = years;
    user1.isAdmin = isAdmin;

    return user1;
};

console.log(destructure(user1));

/*
Завдання 4
Детективне агентство кілька років збирає інформацію про можливу особистість Сатоши Накамото. Вся інформація, зібрана у конкретному році, зберігається в окремому об'єкті. Усього таких об'єктів три - satoshi2018, satoshi2019, satoshi2020.
Щоб скласти повну картину та профіль, вам необхідно об'єднати дані з цих трьох об'єктів в один об'єкт - fullProfile.
Зверніть увагу, що деякі поля в об'єктах можуть повторюватися. У такому випадку в результуючому об'єкті має зберегтися значення, яке було отримано пізніше (наприклад, значення з 2020 пріоритетніше порівняно з 2019).
Напишіть код, який складе повне досьє про можливу особу Сатоші Накамото. Змінювати об'єкти satoshi2018, satoshi2019, satoshi2020 не можна.
*/

const satoshi2020 = {
    name: "Nick",
    surname: "Sabo",
    age: 51,
    country: "Japan",
    birth: "1979-08-21",
    location: {
        lat: 38.869422,
        lng: 139.876632,
    },
};

const satoshi2019 = {
    name: "Dorian",
    surname: "Nakamoto",
    age: 44,
    hidden: true,
    country: "USA",
    wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    browser: "Chrome",
};

const satoshi2018 = {
    name: "Satoshi",
    surname: "Nakamoto",
    technology: "Bitcoin",
    country: "Japan",
    browser: "Tor",
    birth: "1975-04-05",
};

const getFullProfile = (a, b, c) => {
    const fullProfile = { ...a, ...b, ...c };
    return fullProfile;
};

console.log(getFullProfile(satoshi2018, satoshi2019, satoshi2020));

/*
Завдання 5
Дано масив книг. Вам потрібно додати до нього ще одну книгу, не змінюючи існуючий масив (в результаті операції має бути створено новий масив).
*/

const books = [
    {
        name: "Harry Potter",
        author: "J.K. Rowling",
    },
    {
        name: "Lord of the rings",
        author: "J.R.R. Tolkien",
    },
    {
        name: "The witcher",
        author: "Andrzej Sapkowski",
    },
];

const bookToAdd = {
    name: "Game of thrones",
    author: "George R. R. Martin",
};

const addObject = (arr, obj) => {
    const newArray = [...arr, obj];
    return newArray;
};

console.log(addObject(books, bookToAdd));

/*
Завдання 6
Даний об'єкт employee. Додайте до нього властивості age і salary, не змінюючи початковий об'єкт (має бути створено новий об'єкт, який включатиме всі необхідні властивості). Виведіть новий об'єкт у консоль.
*/

const employee = {
    name: "Vitalii",
    surname: "Klichko",
};

const addValueToObject = (obj, age, salary) => {
    const employee1 = {...obj, age: age, salary: salary};
    return employee1;
}

console.log(addValueToObject(employee, 19, 2500));

/*
Завдання 7
Доповніть код так, щоб він коректно працював
*/

const array = ["value", () => "showValue"];

// Допишіть код тут

const [value, showValue] = array;

console.log(value); // має бути виведено 'value'
console.log(showValue()); // має бути виведено 'showValue'
