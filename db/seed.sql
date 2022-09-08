INSERT INTO departments (name)
VALUES	("Marketing"),
		("Finance"),
		("Human Resources"),
		("Information Technology");

INSERT INTO roles (title, salary, department_id)
VALUES	("Salesperson", 75000, 1),
		("Accountant", 80000, 2),
		("HR Coordinator", 50000, 3),
		("Recruiter", 70000, 3),
		("Network Admin", 60000, 4),
		("Software Engineer", 120000, 4),
		("Information Security", 120000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES	("Michael", "Ha", 1, null),
		("Frank", "Michael", 2, null),
		("Abbey", "Free", 3, 1),
		("Joey", "Joseph", 4, 2),