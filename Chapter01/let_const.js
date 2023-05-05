let movie = 'Lod of the Rings' // essa váriavel tem escopo global

// var movie = 'Batman vs Superman' // error movie já foi declarada

function starWarsFan() {
    const movie = 'Star Wars' // tem escopo loval, é válida somente dentro dessa função
    return movie
}

function marvelFan() {
    movie = 'The Avengers' // Referenciou a váriavel global "movie" e sobrescreveu
    return movie
}

function blizzardFan() {
    const isFan = true
    let phrase = 'Warcraft'
    console.log('Before if: ' + phrase)
    if (isFan) {
        let phrase = 'initial text' // essa funlçao phrase tem "if" como escopo
        phrase = ' For the Horde!'
        console.log('Inside if: ' + phrase)
    }
    phrase = 'For the Alliance!'
    console.log('After if: ' + phrase)
}

console.log(movie)
console.log(starWarsFan())
console.log(marvelFan())
console.log(movie)
blizzardFan()