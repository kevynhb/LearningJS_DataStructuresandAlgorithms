class Person {
    contructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
}

//--------------------------

var lotrChar = new Person('Kevyn')
console.log(lotrChar.name)

lotrChar.name = 'Gandalf'
console.log(lotrChar.name)

lotrChar._name = 'Sam'
console.log(lotrChar._name) // atributo não fica privado, permite acesso de dentro da class

