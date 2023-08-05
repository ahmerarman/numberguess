#!/usr/bin/env node

import inquirer from "inquirer";

let score: number = 0;

async function guessNumber(){
    type ansType = {
        userguess: number;
    }
    const guessNum = Math.floor(Math.random()*10);
    let tip: string;
    if(guessNum%2 == 0){
        tip = "Tip: Number is even.";
    }else{
        tip = "Tip: Number is Odd.";
    }

    const answer: ansType = await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: `Guess a number between 1 to 10 (${tip}): `
        }
    ]);

    console.log(`Your Guess ${answer.userguess} and System generates ${guessNum}`);
    if(answer.userguess === guessNum){
        score++;
        console.log("Congratulations your answer is correct. Your score is: " + score);
    }else{
        console.log("Your score is: " + score + " Better luck next time.");
    }
}

async function startLoop(){
    do{
        await guessNumber();
        var again = await inquirer.prompt([
            {
                type: "checkbox",
                name: "restart",
                choices: ['Yes', 'No'],
                message: "Do you want to continue: "
            }
        ]);
    }while(again.restart == "Yes")
}

startLoop();
