
'use strict';
function diceRoll(max_roll) {

    return Math.floor(Math.random() * max_roll) + 1;
}

// Taulukko johon tallennetaan tulokset

const results = []

let max_roll = parseInt(prompt('Type the maximum number of the dice: '));

// ;; ikuinen looppi joka pyörii kunnes tulos on max_roll

for (;;) {
    let roll = diceRoll(max_roll);

    // ja lisätään tulos taulukkoon

    results.push(roll);

    // jos tulos on max_roll niin looppi katkaistaan

    if (roll === max_roll) {
        break;
    }
}


// Luodaan lista ja lisätään tulokset listaan, ja niiden eteen unordered list elementti <ul>

let unorderedList = '<ul>';

// Käydään jokainen elementti läpi ja lisätään se listaan, list elementin sisään <li></li>

for (let i = 0; i < results.length; i++) {
    unorderedList += `<li>${results[i]}</li>`;
}

// Suljetaan lista </ul> elementillä

unorderedList += '</ul>';

document.querySelector('#target').innerHTML = unorderedList;