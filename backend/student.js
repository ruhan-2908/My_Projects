const Students = [];

//add students
function addStudent(name,score) {
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    Students.push({name,score});
}

//getgrades
function getGrades()
{
    return Students.map( (student) =>{
        let grade = "F";
        if(student.score >= 90) grade = "A";
        else if ( student.score >= 75) grade = "B";
        else if ( student.score >= 50 )grade = "C";
        else if ( student.score >= 35 )grade = "E";
        return {...student,grade};
    } )
}

//top scores
function findTopScores()
{
    return Students.filter((student) => student.score >= 75);
}

//search a student
function findStudent(name)
{
    name = name.trim().toUpperCase();
    return Students.find((student) => student.name == name);
}

//check failures

function hasFailures()
{
    return Students.some((student) =>
        student.score < 35
    );
}

//display data

function displayAll()
{
    const graded = getGrades();
    console.log("Students Data");
    console.log("All Students with grades");
    console.log("Name | Score | Grade")
    graded.forEach((student) =>{
        console.log(`${student.name} | ${student.score} | ${student.grade}`)
    })
}


//Adding students

addStudent("John","91");
addStudent("Ravi","82");
addStudent("Sneha","44");
addStudent("Aarthi","29");

//Display

displayAll();

//Top Scores
console.log("\n Top Scores:");
console.log(findTopScores());


//Find User
console.log("\n Searching for Ravi: ");
console.log(findStudent("Ravi"));


//check failures
console.log("\n Any failures");
console.log(hasFailures() ? "yes Some student failed" : "No failures");

