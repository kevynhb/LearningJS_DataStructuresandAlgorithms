interface Person {
    name: string
    age: number
}

function printName(person: Person) {
    console.log(person.name)
}

const john = {name: 'John', age: 21}
const mary = {name: 'Mary', age: 22, phone: '12345678'}

printName(john)
printName(mary)