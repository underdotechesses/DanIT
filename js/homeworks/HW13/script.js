/* Теоретичні питання
1. Яке призначення методу event.preventDefault() у JavaScript?
1. preventDefault() предотвращает только стандартное действие браузера, но не останавливает распространение события по всплытию.

2. В чому сенс прийому делегування подій?
2. При делегировании событий прослушиватель не требуется навешивать на каждый элемент, а можно повесить на родительский элемент и выполнять событие на event.target валидируя его по типу.

3. Які ви знаєте основні події документу та вікна браузера?
3. Типичные события браузера:
    - Клик на ссылку инициирует навигацию к его url-адреса,
    - Клик на кнопку отправки формы инициирует отправку ее на сервер,
    - Нажатие кнопки мыши в тексте и перемещение курсора – выделяет текст.

Практичне завдання:

Реалізувати перемикання вкладок (таби) на чистому Javascript.

Технічні вимоги:

- У папці tabs лежить розмітка для вкладок. Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки. При цьому решта тексту повинна бути прихована. У коментарях зазначено, який текст має відображатися для якої вкладки.
- Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.
- Потрібно передбачити, що текст на вкладках може змінюватись, і що вкладки можуть додаватися та видалятися. При цьому потрібно, щоб функція, написана в джаваскрипті, через такі правки не переставала працювати.

Умови:
- При реалізації обов'язково використовуйте прийом делегування подій (на весь скрипт обробник подій повинен бути один).
*/

"use strict";

const tabsList = document.querySelector(".tabs");
const listLi = document.querySelectorAll(".tabs-content li");

tabsList.addEventListener("click", (event) => {
    const activeTabTitle = document.querySelector(".active");

    if (event.target.classList.contains("active") || !activeTabTitle) {
        toggleTab(event.target);
    } else {
        toggleTab(event.target);
        toggleTab(activeTabTitle);
    }

    function toggleTab(elem) {
        const activedTab = document.querySelector(
            `.tabs-content li[data-name=${elem.innerText.toLowerCase()}]`
        );
        elem.classList.toggle("active");
        activedTab.classList.toggle("hidden");
    }
});
