// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

"use strict"

let fraction = {
    numerator: 1,
    denominator: 2,
}

function sum(numerator, denominator) {
    return numerator + denominator;
}

function subtraction(numerator, denominator) {
    return numerator - denominator;
}

function multiplication(numerator, denominator) {
    return numerator * denominator;
}

function division(numerator, denominator) {
    return numerator / denominator;
}

function reduction(numerator, denominator) {
    for (let i = numerator; i >= 0; i--) {
        if (numerator % i == 0 && denominator % i == 0) {
            return numerator / i + `/` + denominator / i;
        }
    }
}

