//create employee constructor
function Employee(id,name,department,salary)
{
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary =salary;
}

//create a simple employee db
const EmployeeDB ={};

//function to add employee to db
function addEmployee(id,name,department,salary)
{
    const employee = new Employee(id,name,department,salary);
    EmployeeDB[id] = employee;
    console.log("Employee with id " + id + " added");
}

//function to get all employees
function getEmployees()
{
    const employees = Object.values(EmployeeDB);
    console.log("List of Employees");
    employees.forEach((employee) =>{
        console.log(`Name: ${employee.name},Department: ${employee.department},Salary: ${employee.salary}`);
    })
}

//function to get employee by id
function getEmployeeById(id)
{
    if(EmployeeDB[id])
    {
        return Object.entries(EmployeeDB[id]);
    }
    return `Employee with the id : ${id} not found`;
}

//function to update employee details
function updateEmployee(id,updateDetails)
{
    if(EmployeeDB[id])
    {
        Object.assign(EmployeeDB[id],updateDetails);
    }else{
        console.log(`Employee with ID ${id} is not found`);
    }
}

//function to freeze the employee data
function freezeEmployee(id)
{
    if(EmployeeDB[id])
    {
        Object.freeze(EmployeeDB[id]);
        console.log("Employee Data freezed");
    }else{
        console.log(`Employee with ID ${id} not found`);
    }
}

//function to seal the employee data
function sealEmployee(id)
{
    if(EmployeeDB[id])
    {
        Object.seal(EmployeeDB[id]);
        console.log("Employee seal freezed");
    }else{
        console.log(`Employee with ID ${id} not found`);
    }
}

//usage
addEmployee(1,"Alice","Engineering",70000);
addEmployee(2,"Bob","Marketing",50000);
addEmployee(3,"Charlie","HR",60000);

//view employees
console.log("\n");
getEmployees();

//Get Employee Details with id
console.log("\nView Employee Details")
console.log(getEmployeeById(2));


//update Employee data
console.log("\nUpdate Employee Details")
updateEmployee(2,{salary:55000});
console.log("View Details after changes being done");
getEmployees();



//freeze
console.log("\nFreeze Employee Details");
freezeEmployee(2);

//attempt to modify
EmployeeDB[2].salary = 900000;
console.log("\nAfter freezing")
console.log(getEmployeeById(2));



//seal the data
console.log("\n Sealing the data");
sealEmployee(1);

//attempt to modify
EmployeeDB[1].salary = 800000;
console.log("After sealing");
console.log(getEmployeeById(1));
