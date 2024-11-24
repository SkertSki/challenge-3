// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


addEmployeesBtn.addEventListener("click", function employee(){
  collectEmployees()
})

let employees = [];

//Take inputed employee names and salaries and log into an array
const collectEmployees = function () {

  while (true) {
      const nameF = prompt("Enter first name:");
      const nameL = prompt("Enter last name:");
      let sal = prompt("Enter salary:");

      if (isNaN(sal)) {
        sal = "$0";
      }

      employees.push({
        FirstName: nameF,
        LastName: nameL,
        Salary: sal
      });

      const yesNo = confirm("Would you like to add another employee?")
      if (!yesNo) {
        break;
      }
      break
  }
  return employees;
}


//Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary



};
  
  
  



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};










/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

//Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
