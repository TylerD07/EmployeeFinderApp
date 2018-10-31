const employeeList = require("../app/data/employees");

module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    res.json(employeeList);
  });

  app.post("/api/employees", (req, res) => {
    employeeList.push(req.body);

    //puts each employee's score array's sum into an array
    const sum = (a, b) => Number(a) + Number(b);
    const output = employeeList.map(({ scores }) => scores.reduce(sum));

    //get the difference between last number in the array(user input) & each number in output array
    let newArray = output.map(value => {
      return Math.abs(value - output[output.length - 1]); //Math.abs gets absolute value so that there's no negative values when getting diffferences
    });

    const firstMatchIndex = newArray.findIndex((value, i, array) => {
      return value === Math.min(...array);
    });
    const firstMatch = employeeList[firstMatchIndex];

    return res.json(firstMatch);

    // res.end();
  });
};

function findIndex(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
function equals2(value, x, y) {
  return value === 2;
}
function equals3(value) {
  return value === 3;
}
const array = [1, 2, 3];
findIndex(array, equals2);
findIndex(array, equals3);
