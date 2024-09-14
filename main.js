#! /usr/bin/env node
// import {input} from "@inquirer/prompts";
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgRed("\n\t\t\t\t\t ****AI ADVENTURE QUIZ**** \t\t\t\t\t\n"));
// Welcome to my AI Adventure Quiz :)
console.log(chalk.green("\n\t\t\t\t     Welcome"), chalk.redBright("to"), chalk.blue("my"), chalk.red("AI"), chalk.yellow("Adventure"), chalk.cyan("Quiz"), chalk.yellowBright(":)"));
console.log(chalk.yellowBright("\n\nHey guys! This quiz is based on AI question. In this quiz the 10 question is given."), chalk.red("\nNote:"), chalk.yellowBright("For winning the quiz attempt 7 question correct out of 10.\n\n"));
let answer = await inquirer.prompt({
    name: "ans",
    type: "confirm",
    message: "Are you ready?"
});
// ******* CODING START
// Question 1
let points = 0;
const ques1 = await inquirer.prompt([
    {
        name: "one",
        message: "1. What does AI stand for?",
        type: "list",
        choices: ["(a) Artificial Intelligence", "(b) Advanced Intelligence", "(c) Artificial Innovation", "(d) Advanced Innovation"]
    }
]);
if (ques1.one == "(a) Artificial Intelligence") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 2
const ques2 = await inquirer.prompt([
    {
        name: "two",
        message: "2. Who is considered the father of AI?",
        type: "list",
        choices: ["(a) Alan Turing", "(b) Marvin Minskey", "(c) JohnMcCarthy", "(d) Ray Kurzweil"]
    }
]);
if (ques2.two == "(c) JohnMcCarthy") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 3
const ques3 = await inquirer.prompt([
    {
        name: "three",
        message: "3. Which of the following is an application of AI?",
        type: "list",
        choices: ["(a) Computer Networking", "(b) Cyber Security", "(c) Virtual Assistants", "(d) All of the above"]
    }
]);
if (ques3.three == "(d) All of the above") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 4
const ques4 = await inquirer.prompt([
    {
        name: "four",
        message: "4. What is the term for AI systems that can learn and improve on their own?",
        type: "list",
        choices: ["(a) Machine Learning", "(b) Deep Learning", "(c) Natural Language Processing", "(d) Robotics"]
    }
]);
if (ques4.four == "(a) Machine Learning") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 5
const ques5 = await inquirer.prompt([
    {
        name: "five",
        message: "5. Which AI concept involves training models on large datasets?",
        type: "list",
        choices: ["(a) Supervised Learning", "(b) Unsupervised Learning", "(c) Reinforcement Learning", "(d) Transfer Learning"]
    }
]);
if (ques5.five == "(a) Supervised Learning") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 6
const ques6 = await inquirer.prompt([
    {
        name: "six",
        message: "6. What is the name of the AI algorithm that plays Go?",
        type: "list",
        choices: ["(a) AlphaGo", "(b) DeepMind", "(c) Watson", "(d) Siri"]
    }
]);
if (ques6.six == "(a) AlphaGo") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 7
const ques7 = await inquirer.prompt([
    {
        name: "seven",
        message: "7. Which company developed the AI chatbot, Alexa?",
        type: "list",
        choices: ["(a) Google", "(b) Amazon", "(c) Microsoft", "(d) Facebook"]
    }
]);
if (ques7.seven == "(b) Amazon") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 8
const ques8 = await inquirer.prompt([
    {
        name: "eight",
        message: "8. What is the term for AI systems that can understand human language?",
        type: "list",
        choices: ["(a) Natural Language Processing", "(b) Computer Vision", "(c) Robotics", "(d) Machine Learning"]
    }
]);
if (ques8.eight == "(a) Natural Language Processing") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 9
const ques9 = await inquirer.prompt([
    {
        name: "nine",
        message: "9. Which AI field focuses on creating robots that can perform tasks autonomously?",
        type: "list",
        choices: ["(a) Robotics", "(b) Machine Learning", "(c) Computer Vision", "(d) Autonomous Systems"]
    }
]);
if (ques9.nine == "(d) Autonomous Systems") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
//Question 10
const ques10 = await inquirer.prompt([
    {
        name: "ten",
        message: "10. What is the term for the hypothetical point at which AI surpasses human Intelligence?",
        type: "list",
        choices: ["(a) Singularity", "(b) Artificial General Intelligence", "(c) Machine Learning", "(d) Deep Learning"]
    }
]);
if (ques10.ten == "(a) Singularity") {
    console.log(chalk.green("You choose correct answer :)"));
    points++;
}
else {
    console.log(chalk.red("wrong answer :("));
}
// ****** OUTPUT CONDITIONS
if (points === 10) {
    console.log(chalk.magentaBright("\n\nCongratulation! You attempt all questions without any mistake.\n Thanks for attempt this quiz. :) "));
    console.log(chalk.yellow(`\nYOUR POINTS: ${points}`));
}
else if (points > 7) {
    console.log(chalk.magentaBright("\n\nWelldon! You were very close to your winning the qiz. Greaaat!"));
    console.log(chalk.yellow(`\nYOUR POINTS: ${points}`));
}
else if (points = 7) {
    console.log(chalk.magentaBright("\n\nNice! you done 7 question without mistake. Keep it up!"));
    console.log(chalk.yellow(`\nYOUR POINTS: ${points}`));
}
else {
    console.log(chalk.magentaBright("\n\nAWWW You Loss! Don't worry. Try try againn"));
    console.log(chalk.yellow(`\nYOUR POINTS: ${points}`));
}
