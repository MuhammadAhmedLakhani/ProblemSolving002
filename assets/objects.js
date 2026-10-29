// Day 2: Objects

// Data for today:

// javascript
const student = {
  name: "Asha",
  age: 20,
  marks: { math: 82, science: 74, english: 91 },
  city: "Pune",
};

// Part A: Basics (about 30 minutes)

// 1:Print student.name and student["city"]. Then add a grade property,
//  change age to 21, and delete city. Print the object after each change.

console.log(student.name)
console.log(student["city"])
student.grade = "A";
console.log(student)
student["age"] = 21;
console.log(student)
delete student.city
console.log(student)













