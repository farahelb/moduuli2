'use strict';

const numbers = [2, 7, 4];

function even(arr) {

    // Palauttaa taulukon joka sisältää vain parilliset luvut, eli luvut jotka ovat jaollisia kahdella.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    return arr.filter(num => num % 2 === 0);
}

console.log('Original array:', numbers);
console.log('Even numbers:', even(numbers));