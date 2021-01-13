// Code your solutions in this file
function writeCards(array) {
    const cards = [];
    for (var i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return cards
}

function countDown(number) {
    while (number > -1) {
        console.log(number)
        number -= 1
    }
}