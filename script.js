document.addEventListener('DOMContentLoaded', () => {

    // получаем все элементы с классом pushmenu
    const pushmenu = document.getElementsByClassName('pushmenu');

    // получаем элемент с классом hidden-overley
    const hiddenOverley = document.querySelector('.hidden-overley');

    // отслеживаем клик клика по оверлею
    hiddenOverley.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('show');
        document.querySelector('.sidebar').classList.toggle('show');
        document.querySelector('body').classList.toggle('sidebar-opened');
        for( i=0; i < pushmenu.length; i++ ){
            pushmenu[i].classList.toggle('open');
        }
    });

    const pushmenuFunction = function() {
        document.querySelector('.pushmenu').classList.toggle('open');
        document.querySelector('.sidebar').classList.toggle('show');
        document.querySelector('.hidden-overley').classList.toggle('show');
        document.body.classList.toggle('sidebar-opened')
    };

    // Отслеживаем клики кнопок с классом pushmenu
    for( i=0; i < pushmenu.length; i++ ){
        pushmenu[i].addEventListener('click', pushmenuFunction, false);
    }

    const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
    const accordeonFunction =  function() {
        this.parentNode.querySelector('ul').classList.toggle('show');
        this.querySelector('i').classList.toggle('rotate');
    }
    // Отслеживаем клики родительских пунктов меню
    for( i=0; i < sidebarAccordeon.length; i++ ){
        sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-transfer');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const prices = {
//         'Болонья': {
//             'Милан': 220, 'Флоренция': 110, 'Парма': 105, 'Бергамо': 260, 'Рим': 388,
//             'Венеция': 154, 'Портофино': 286, 'озеро Комо': 305, 'Турин': 339,
//             'Генуя': 305, 'Пиза': 178, 'Верона': 151
//         },
//         'Милан': {
//             'Болонья': 220, 'Флоренция': 302, 'Парма': 126  , 'Бергамо': 60, 'Рим': 570,
//             'Венеция': 275, 'Портофино': 174, 'озеро Комо': 50, 'Турин': 143,
//             'Генуя': 150, 'Пиза': 290, 'Верона': 162
//         },
//         'Флоренция': {
//             'Болонья': 110, 'Милан': 308, 'Парма': 190, 'Бергамо': 342, 'Рим': 275,
//             'Венеция': 260, 'Портофино': 216, 'озеро Комо': 391, 'Турин': 400,
//             'Генуя': 236, 'Пиза': 85, 'Верона': 237
//         },
//         'Парма': {
//             'Болонья': 100, 'Флоренция': 187, 'Милан': 127, 'Бергамо': 166, 'Рим': 459,
//             'Венеция': 246, 'Портофино': 192, 'озеро Комо': 211, 'Турин': 245,
//             'Генуя': 211, 'Пиза': 183, 'Верона': 146
//         },
//         'Бергамо': {
//             'Болонья': 254, 'Флоренция': 342, 'Парма': 164, 'Милан': 60, 'Рим': 615,
//             'Венеция': 226, 'Портофино': 231, 'озеро Комо': 61, 'Турин': 184,
//             'Генуя': 203, 'Пиза': 319, 'Верона': 116
//         },
//     };
//
//     const pricePerKm = 2.0;
//
//     const fromSelect = document.getElementById('from');
//     const toSelect = document.getElementById('to');
//     const priceDisplay = document.getElementById('price-display');
//     const priceText = document.getElementById('price');
//     const calculateButton = document.getElementById('calculate');
//
//     function calculatePrice() {
//         const from = fromSelect.value;
//         const to = toSelect.value;
//
//         if (from && to && from !== to) {
//             const distance = prices[from][to] || prices[to][from];
//             const price = distance * pricePerKm;
//             priceText.textContent = `Цена: ${price} €`;
//             priceDisplay.style.display = 'block';
//         } else {
//             priceText.textContent = 'Цена: -- €';
//             priceDisplay.style.display = 'none';
//         }
//     }
//
//     calculateButton.addEventListener('click', calculatePrice);
// });

document.addEventListener('DOMContentLoaded', function () {
    const prices = {
        'Берлин': {
            'Дрезден': 193, 'Дюссельдорф': 561, 'Мюнхен': 591, 'Дортмунд': 498,
            'Франкфурт-на-Майне': 551, 'Кельн': 577, 'Штутгарт': 638, 'Нюрнберг': 448,
            'Гамбург': 567, 'Эссен': 537
        },
        'Дюссельдорф': {
            'Дрезден': 582, 'Берлин': 572, 'Мюнхен': 611, 'Дортмунд': 71,
            'Франкфурт-на-Майне': 227, 'Кельн': 44, 'Штутгарт': 406, 'Нюрнберг': 444,
            'Гамбург': 401, 'Эссен': 35
        },
        'Мюнхен': {
            'Дрезден': 464, 'Дюссельдорф': 611, 'Берлин': 593, 'Дортмунд': 606,
            'Франкфурт-на-Майне': 393, 'Кельн': 573, 'Штутгарт': 573, 'Нюрнберг': 169,
            'Гамбург': 791, 'Эссен': 634
        },
        'Дортмунд': {
            'Дрезден': 514, 'Дюссельдорф': 70, 'Мюнхен': 606, 'Берлин': 498,
            'Франкфурт-на-Майне': 221, 'Кельн': 93, 'Штутгарт': 424, 'Нюрнберг': 437,
            'Гамбург': 344, 'Эссен': 37
        },
        'Франкфурт-на-Майне': {
            'Дрезден': 460, 'Дюссельдорф': 227, 'Мюнхен': 393, 'Дортмунд': 224,
            'Берлин': 551, 'Кельн': 190, 'Штутгарт': 210, 'Нюрнберг': 224,
            'Гамбург': 501, 'Эссен': 250
        },
        'Кельн': {
            'Дрезден': 569, 'Дюссельдорф': 44, 'Мюнхен': 573, 'Дортмунд': 93,
            'Франкфурт-на-Майне': 192, 'Берлин': 577, 'Штутгарт': 374, 'Нюрнберг': 407,
            'Гамбург': 428, 'Эссен': 71
        },
    };

    const pricePerKm = 1.9;

    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const priceDisplay = document.getElementById('price-display');
    const priceText = document.getElementById('price');
    const calculateButton = document.getElementById('calculate');

    function calculatePrice() {
        const from = fromSelect.value;
        const to = toSelect.value;

        if (from && to && from !== to) {
            const distance = prices[from][to] || prices[to][from];
            const price = Math.round(distance * pricePerKm);
            priceText.textContent = `Цена: ${price} €`;
            priceDisplay.style.display = 'block';
        } else {
            priceText.textContent = 'Цена: -- €';
            priceDisplay.style.display = 'none';
        }
    }

    calculateButton.addEventListener('click', calculatePrice);
});




document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link-transfer');

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const parent = this.closest('.kind-of-transfers1');
            parent.classList.add('highlight-border');
        });

        link.addEventListener('mouseleave', function() {
            const parent = this.closest('.kind-of-transfers1');
            parent.classList.remove('highlight-border');
        });
    });
});

