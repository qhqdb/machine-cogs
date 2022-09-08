const inquirer = require("inquirer");
const QUESTIONS = require("./util/prompts");
const database = require("./util/query");

function init() {
	main();
}

// Main menu

function main() {
	inquirer.prompt(PROMPTS.menu)
	.then(answers => {
		switch (answers.selection) {
			case (PROMPTS.KEYS.VIEW_EMPL):
				viewTable("Empls");
				break;
			case (PROMPTS.KEYS.ADD_EMPL):
				addEntry("Empl");
				break;
			case (PROMPTS.KEYS.EMPL_ROLE):
				updateEmployee();
				break;
			case (PROMPTS.KEYS.EMPL_MAN):
				updateManager();
				break;
			case (PROMPTS.KEYS.ADD_ROLE):
				addEntry("Role");
				break;
			case (PROMPTS.KEYS.VIEW_ROLE):
				viewTable("Roles");
				break;
			case (PROMPTS.KEYS.VIEW_DEPT):
				viewTable("Depts");
				break;
			case (PROMPTS.KEYS.ADD_DEPT):
				addEntry("Dept");
				break;
			case(PROMPTS.KEYS.DEL_DEPT):
				delEntry("delDept", "departments");
				break;
			case(PROMPTS.KEYS.DEL_ROLE):
				delEntry("delRole", "roles");
				break;
			case(PROMPTS.KEYS.DEL_EMPL):
				delEntry("delEmpl", "employees");
				break;
			case(PROMPTS.KEYS.DEPT_BUDG):
				viewTable("Budg");
				break;
			default:
				console.log("Exiting...");
				process.exit(0);
		}
	});
}

// View department, role, or employee

function viewTable(table) {
	database["display" + table]()
	.then(console.log)
	.then(main);
}

// Add department, role, or employee

function addEntry(table) {
	inquirer.prompt(PROMPTS["new" + table])
	.then(answers => database["add" + table](answers))
	.then(main);
}


// Update employee's role

function updateEmployee() {
	inquirer.prompt(PROMPTS.updateEmpl)
	.then(answers => database.setRole(answers))
	.then(main);
}


// Update employee's manager

function updateManager() {
	inquirer.prompt(PROMPTS.updateMan)
	.then(answers => database.setMan(answers))
	.then(main);
}


// Delete department, role, or employee

function delEntry(method, table) {
	inquirer.prompt(PROMPTS[method])
	.then(results => database.delEntry(table, results))
	.then(main);
}

init();