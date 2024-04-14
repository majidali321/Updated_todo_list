#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome To My TODO List\n");
let todoList = [];
let condition = true;
let main = async () => {
    while (condition) {
        let Option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add new Task", "Delet task", "update task", "viw todo list", "exit"],
            }
        ]);
        if (Option.choices === "Add new Task") {
            await AddTask();
        }
        else if (Option.choices === "Delet task") {
            await DeleteTask();
        }
        else if (Option.choices === "viw todo list") {
            await ViewToDo();
        }
        else if (Option.choices === "update task") {
            await updatetask();
        }
        else if (Option.choices === "exit") {
            condition = false;
        }
    }
};
let AddTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n${newTask.task} is added in your list`);
};
let ViewToDo = () => {
    console.log("\n your todo_list is \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1} :${task}`);
    });
};
let DeleteTask = async () => {
    await ViewToDo();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of task you want to delete",
        }
    ]);
    let DeleteTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${DeleteTask} is deleted from todo list`);
};
// function to update task
let updatetask = async () => {
    await ViewToDo();
    let update_tsk_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the 'index no.' you want to update",
        },
        {
            name: "new_task",
            type: "input",
            message: "now enter new task:",
        }
    ]);
    todoList[update_tsk_index.index] = update_tsk_index.new_task;
    console.log(`\nTask add index no. ${update_tsk_index.index} updated successfully[for updated list check todo list]`);
};
main();
