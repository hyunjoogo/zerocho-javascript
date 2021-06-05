const form = document.querySelector('form');
const input = document.querySelector('input');
const p = document.querySelector('p');


const checkWord = (event) => {
  event.preventDefault();
  console.log(event.target[1].value);
  p.textContent = event.target[1].value;
}

form.addEventListener('submit', (event) => checkWord(event));

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

const memberNum = students.length;
const result = students.reduce((prev, curr) => {
  console.log('--------------');
  console.log(prev);
  console.log(curr);
  return (prev + curr.score);
}, 0);
const result2 = result / memberNum;

console.log(result2);

console.log('--------------');

const addPassStudent = students.map(student => {
  if (student.score >= 80) {
    return Object.assign(new Student(), {...student, isPass: true})
  } else {
    return Object.assign(new Student(), {...student, isPass: false})
  }
})

console.log(addPassStudent);


let passStudents = [];
students.forEach(student => {
  if (student.score >= 80) {
    passStudents.push(student)
  }
});
console.log(passStudents);


// 내림차순으로 만들기
const descendStudents = students.sort((a, b) => {
  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }
  return 0;
});

console.log(descendStudents);
console.log(students);

const a = students.map((Student) => Student.score);
const a = a.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }
)
console.log(a);

