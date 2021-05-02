"use strict"

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
    manufacturer: 'Tesla',
    model: 'model X',
    year: 2015,
    averageSpeed: 100,
}
function carInfo() {
    alert(`Manufacturer: ${car.manufacturer}
Model: ${car.model}
Year: ${car.year}
Average speed: ${car.averageSpeed}`);
}


function distance(kilometer) {
    let time = kilometer / car.averageSpeed
    if (kilometer >= 400 && kilometer < 500) {
        alert('4 часa в дороге')

    } else if (time % 500 > 0) {
        time = time - Math.floor(kilometer / 500);
        alert(`${time} часов в дороге`);
    }
}


