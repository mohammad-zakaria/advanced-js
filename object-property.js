const students = [
    { id : 21, name: "Jack"},
    {id:31, name: "Omar"},
    { id : 41, name: "Tanzim"},
    { id : 71, name: "Tahmid"}
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(bigger);