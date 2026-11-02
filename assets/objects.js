// Day 2: Objects

// Data for today:

// javascript
// const student = {
//   name: "Asha",
//   age: 20,
//   marks: { math: 82, science: 74, english: 91 },
//   city: "Pune",
// };

// Part A: Basics (about 30 minutes)

// 1:Print student.name and student["city"]. Then add a grade property,
//  change age to 21, and delete city. Print the object after each change.

// console.log(student.name)
// console.log(student["city"])
// student.grade = "A";
// console.log(student)
// student["age"] = 21;
// console.log(student)
// delete student.city
// console.log(student)

// Predict the output, and then run it:

//    console.log(student.email);                           //undefined (as nokey found)
//    console.log(student.marks.history);                   //undefined  (as nokey found)
//    console.log(student.address.street);                  //error  (as undefined then undefined 2 times)                         


// 3. Write hasProperty(obj, key) that returns true or false. 
// Test it with "name" and "email". Compare the in operator with obj[key] !== undefined. 
// Is there a case where they differ? Hint: a property set to undefined on purpose.


// let hasProperty = (obj,key)=> {
//     return key in obj
//     // return obj[key] !== undefined
// }

// console.log(hasProperty(student, "age"))


// student.model = undefined;

// console.log(student)
// console.log(hasProperty(student, "model"))

// console.log(hasProperty(student, age))


// const student = {
//   name: "Asha",
//   age: 20,
//   marks: { math: 82, science: 74, english: 91 },
//   city: "Pune",
// };


//4: Print every key and value of student.marks as math: 82
// , using Object.entries. Then use Object.keys and Object.values separately and note what each returns.

// let marks = student["marks"];
// console.log(marks)

// Object.entries(marks).forEach(([sub,mark]) => {
//   console.log(`${sub} : ${mark}`)  
// });

// console.log(Object.keys(marks))
// console.log(Object.values(marks))



// // 5:Calculate the average of the three marks, using Object.values and reduce.



// let Total = Object.values(marks).reduce((sum, elem ) => {
//   return sum + elem
// },0)

// let average = Total /  Object.values(marks).length
// average = average.toFixed(2)
// console.log(average)

// const student = {
//   name: "Asha",
//   age: 20,
//   marks: { math: 82, science: 74, english: 91 },
//   city: "Pune",
// };

//6: Find the subject with the highest mark and print its name, not just the number.

// let marks = student["marks"];

// // getting marks Array

// const marksArray = Object.entries(marks)

// // getting highest

// let highest = marksArray.reduce( (high,[sub,mark])=> {
//      return mark > high? mark:high
// },marksArray[0][1]);

// // getting high object

// let highObject = marksArray.find(elem => elem[1] === highest)
// let highSubject = highObject[0]
// console.log(highSubject)

// Part C: References and copies (about 30 minutes)

// Predict, then run:
// javascript
// const copy = student;
// copy.name = "Ravi";
// console.log(student.name);  // Ravi printed

//it is beacause he copy variable is pointing to same object (same notebook) but different names

// 8. Make a copy with { ...student } and change copy.name. Check that student.name is untouched. 
// Then change copy.marks.math = 0 and print student.marks.math. Write down why it changed.


// const student = {
//   name: "Asha",
//   age: 20,
//   marks: { math: 82, science: 74, english: 91 },
//   city: "Pune",
// };


// const copy = {...student}
// copy.name = "Bilal"
// console.log(student.name) /// Asha (because now both copy and student are seprate nootbooks)



// Stretch (optional)

// Add a method to the object: student.getAverage = function () { ... } that uses this.marks.
//  Call it, then try const fn = student.getAverage; fn();
//  and see what breaks. Just notice it for now, because we’ll return to this later.


const student = {
  name: "Asha",
  age: 20,
  marks: { math: 82, science: 74, english: 91 },
  city: "Pune",
};

student.getAverage = function () {
  const [topSubject, topMark] = Object.entries(this.marks).reduce((high, elem) => elem[1] > high[1] ? elem : high)
  return (topMark / Object.entries(this.marks).length).toFixed(1)
}

console.log("Average --->",student.getAverage())

const fn = student.getAverage
fn()
