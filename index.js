// the required node modules
const inquirer = require('inquirer');
const fs = require('fs');
const teamGenerator = require('./src/page-template');

// the lib modules that has been created
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// create an empty array for answer to the questions
const newEmployee = [];

// array of questions that will be asked to user
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"What is your name?"
        },
        {
            type:'input',
            name:'id',
            message:"What is your ID number?"
        },
        {
            type:'input',
            name:'email',
            message:"What is your email?"
        },
        {
            type:'list',
            name:'role',
            message:"What is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ])

    // if engineer is chosen, these following questions will be added
    if (answers.role === "Engineer") {
        const engineerAns = await inquirer
        .prompt([
            {
                type:'input',
                name:'github',
                message:"What is your Github username?"
            },
        ])
            const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                engineerAns.github
            );
            newEmployee.push(newEngineer);

        //  if manager is chosen, these following questions will be added  
    } else if (answers.role === "Manager") {
        const managerAns = await inquirer
        .prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number",
            }
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newEmployee.push(newManager);

    //  if intern is chosen, these following questions will be added  
    } else if (answers.role === "Intern") {
        const internAns = await inquirer 
        .prompt([
            {
                type: "input",
                name: "school",
                message: "Which education establishment did you go to?",
            }
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school,
            );
            newEmployee.push(newIntern); 
        }
};

// created function for adding new member or generate team
async function promptQuestions() {
    await questions()

    const addMemberAns = await inquirer
        .prompt([
            {
                type:"list",
                name:"addMember",
                message: "What would you like to do next?",
                choices: ["Add a new member", "Create team"]
            }
        ])


        if (addMemberAns.addMember === 'Add a new member') {
            return promptQuestions()
        }
        // called out the createTeam function
        return createTeam();
}

// called out the promQuestions function
promptQuestions();

// created a create team function
function createTeam() {
    fs.writeFileSync("./dist/index.html", teamGenerator(newEmployee), "utf-8");
    console.log("You have succesfully created your team profile!")
}

