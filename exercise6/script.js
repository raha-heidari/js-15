// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(persons){
  const ul = document.createElement("ul")
  persons.forEach(person => {
    const li = document.createElement("li")
    li.innerText = `${person.name} ${person.age}`
     ul.appendChild(li)
  });
   document.body.appendChild(ul)
}

printPersons(persons)