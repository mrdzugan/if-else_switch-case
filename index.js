// =========== IF-ELSE

// #1

function task1(a) {
    if (a === 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #2

function task2(a) {
    if (a > 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #3

function task3(a) {
    if (a < 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #4

function task4(a) {
    if (a >= 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #5

function task5(a) {
    if (a <= 0) {
        console.log('Верно');
    } else {
        console.log('Невверно');
    }
}

// #6

function task6(a) {
    if (a !== 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #7

function task7(a) {
    if (a === 'test') {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #8

function task8(a) {
    if (a === '1') {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #9

function task9_1(test) {
    test ? console.log('Верно') : console.log('Неверно');
}

function task9_2(test) {
    if (test) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #10

function task10_1(test) {
    test ? console.log('Неверно') : console.log('Верно');
}

function task10_2(test) {
    if (!test) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #11

function task11(a) {
    if (a > 0 && a < 5) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// #12

function task12(a) {
    if (a === 0 || a === 2) {
        a += 7;
    } else {
        a /= 10;
    }
    alert(a);
}

// #13

function task13(a, b) {
    if (a <= 1 && b >= 3) {
        console.log(a + b);
    } else {
        console.log(a - b);
    }
}

// #14

function task14(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}