const employeeList = document.getElementById("employee-list");
async function fetchEmployees(){
    try{
        const response = await fetch('http://localhost:3000/employees');
        const employee = await response.json();
        displayEmployees(employee);
    }
    catch(error){
        console.log("Error fetching data:" + error);
    }
}
function displayEmployees(employees){
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.name} - ${employee.position}`;
        employeeList.appendChild(li);        
    });
}




/*var x = "Sudha";
console.log("My name is:" + x);
console.log(`My name is ${x}`);*/
fetchEmployees();