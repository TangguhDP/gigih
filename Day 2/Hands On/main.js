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

  nunggu(avg);
}

function nunggu(avg) {
  // Wait function
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Start first call
  console.log("Calculation Start");
  console.log("Second call started");

  // Wait 5 sec
  wait(5 * 1000).then(() => {
    console.log(`age is ${avg}`);
    // Another 5 sec wait after showing avg
    wait(5 * 1000).then(() => console.log("Third call Finished"));
  });

  // Wait 2 sec
  wait(2 * 1000).then(() => {
    console.log("Second Call Finished");
    console.log("Third Call Started");
  });
}
