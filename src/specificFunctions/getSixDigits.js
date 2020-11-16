export const getSixDigitsOnly = (inputNumber) => {
    /* Les nombres décimaux n'étant gérés que sur 32 bits, 
    on est obligé d'utiliser 2 tableaux comme ceci afin de limiter les impprécisions 
    et de générer des décimales dans tous les sens */
    let dividers = [
        1000000,
        100000,
        10000,
        1000,
        100,
        10,
        1,
        0.1,
        0.01,
        0.001,
        0.0001,
        0.00001,
        0.000001,
    ];
    let multiplicators = [
        0.000001,
        0.00001,
        0.0001,
        0.0001,
        0.001,
        0.01,
        0.1,
        1,
        10,
        100,
        1000,
        10000,
        100000,
        1000000,
    ];
    let tabNumber = [];

    dividers.forEach((divider, id) => {
        tabNumber.push([Math.trunc(inputNumber / divider), id]);
        inputNumber = inputNumber - Math.trunc(inputNumber / divider) * divider;
    });

    let newTabNumber = tabNumber.filter((digit) => digit[0] !== 0).slice(0, 6);
    let outputNumber = 0;

    newTabNumber.forEach((digit) => {
        outputNumber = outputNumber + digit[0] * dividers[digit[1]];
    });

    return (
        Math.round(outputNumber * multiplicators[newTabNumber[newTabNumber.length - 1][1]]) /
        multiplicators[newTabNumber[newTabNumber.length - 1][1]]
    );
};
