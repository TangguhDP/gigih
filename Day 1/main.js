// Define the array
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Jane", age: 20 },
];

// Select the table DOM
var table = document.getElementById("table");

// Prepare the string for row
var tRow = "";

// Iterate through the students
students.map((obj) => {
  tRow += `<tr><td>${obj.name} ${obj.age}</td></tr>`;
});

// Render the rows
table.innerHTML = tRow;

// Function average
function average() {
  let total = 0;

  students.forEach((obj) => {
    total = total + obj.age;
  });

  avg = total / students.length;

  document.getElementById("avg").innerHTML = avg;
}
