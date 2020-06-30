// =========== IF-ELSE

// #1
/**
 *
 * @param {number} a
 */
function task1(a) {
    if (a === 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #2
/**
 *
 * @param {number} a
 */
function task2(a) {
    if (a > 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #3
/**
 *
 * @param {number} a
 */
function task3(a) {
    if (a < 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #4
/**
 *
 * @param {number} a
 */
function task4(a) {
    if (a >= 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #5
/**
 *
 * @param {number} a
 */
function task5(a) {
    if (a <= 0) {
        console.log('Верно');
    } else {
        console.log('Невверно');
    }
}

// #6
/**
 *
 * @param {number} a
 */
function task6(a) {
    if (a !== 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #7
/**
 *
 * @param {string} a
 */
function task7(a) {
    if (a === 'test') {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #8
/**
 *
 * @param {string} a
 */
function task8(a) {
    if (a === '1') {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #1 (#9)
/**
 *
 * @param {boolean} test
 */
function task9_1(test) {
    test ? console.log('Верно') : console.log('Неверно');
}

/**
 *
 * @param {boolean} test
 */
function task9_2(test) {
    if (test) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #2 (#10)
/**
 *
 * @param {boolean} test
 */
function task10_1(test) {
    test ? console.log('Неверно') : console.log('Верно');
}

/**
 *
 * @param {boolean} test
 */
function task10_2(test) {
    if (!test) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #1 (#11)
/**
 *
 * @param {number} a
 */
function task11(a) {
    if (a > 0 && a < 5) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #2 (#12)
/**
 *
 * @param {number} a
 */
function task12(a) {
    if (a === 0 || a === 2) {
        a += 7;
    } else {
        a /= 10;
    }
    alert(a);
}

// #3 (#13)
/**
 *
 * @param {number} a
 * @param {number} b
 */
function task13(a, b) {
    if (a <= 1 && b >= 3) {
        console.log(a + b);
    } else {
        console.log(a - b);
    }
}

// #4 (#14)
/**
 *
 * @param {number} a
 * @param {number} b
 */
function task14(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// =========== SWITCH-CASE

// #1 (#15)
/**
 *
 * @param {number} num
 */
function task15(num) {
    let result;
    switch (num) {
        case 1:
            result = 'Зима';
            break;
        case 2:
            result = 'Весна';
            break;
        case 3:
            result = 'Лето';
            break;
        case 4:
            result = 'Осень';
            break;
        default:
            result = 'Invalid num';
    }
    console.log(result);
}

// =========== TASKS

// #3 (#16)
/**
 *
 * @param {number} day
 */
function task16(day) {
    switch (true) {
        case (day > 0 && day < 11):
            console.log('Первая декада');
            break;
        case (day > 10 && day < 21):
            console.log('Вторая декада');
            break;
        case (day > 20 && day <= 31):
            console.log('Третья декада');
            break;
        default:
            console.log('Invalid day');
    }
}

// #4 (#17)
/**
 *
 * @param {number} month
 */
function task17(month) {
    switch (true) {
        case (month > 0 && month < 3) || (month === 12):
            console.log('Зима');
            break;
        case (month > 2 && month < 6):
            console.log('Весна');
            break;
        case (month > 5 && month < 9):
            console.log('Лето');
            break;
        case (month > 8 && month < 12):
            console.log('Осень');
            break;
        default:
            console.log('Invalid month!');
    }
}

// #5 (#18)
/**
 *
 * @param {string} str
 */
function task18(str) {
    str[0] === 'a' ? console.log('Да') : console.log('Нет');
}

// #6 (#19)
/**
 *
 * @param {string} str
 */
function task19(str) {
    Number(str[0]) > 0 && Number(str[0]) < 4 ? console.log('Да') : console.log('Нет');
}

// #7 (#20)
/**
 *
 * @param {string} str
 */
function task20(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += Number(str[i]);
    }
    console.log(result);
}

// #8 (#21)
/**
 *
 * @param {string} str
 */
function task21(str) {
    let sum1 = 0, sum2 = 0;
    if (str.length !== 6) {
        return;
    }
    for (let i = 0; i < str.length; i++) {
        i < 3 ? sum1 += Number(str[i]) : sum2 += Number(str[i]);
    }
    sum1 === sum2 ? console.log('Да') : console.log('Нет');
}