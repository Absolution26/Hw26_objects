"use strict"
// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hour: 20,
    minute: 30,
    second: 45,
}


function plusSeconds(seconds) {
    time.second = time.second + (seconds % 60);
    time.minute = seconds / 60 + time.minute;

}
function plusMinutes(minutes) {
    time.minute = time.minute + minutes;
}
function plusHours(hours) {
    time.hour = time.hour + hours;
}

function displayTime() {
    if (time.second >= 60) {
        time.minute = time.second / 60 + time.minute;
        time.second = time.second % 60;
    }
    if (time.minute >= 60) {
        time.hour = time.minute / 60 + time.hour;
        time.minute = time.minute % 60;
    }
    alert(Math.floor(time.hour) + ':' + Math.floor(time.minute) + ':' + Math.floor(time.second));
}