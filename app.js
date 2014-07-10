var prompt = require('sync-prompt').prompt
var chalk = require('chalk');

var weight = prompt('What is your weight? '); //<- establishes varialbe "weight" and prompts user//

while(isNaN(parseFloat(weight))){ //<- states that if the weight is not an integer, repeat prompt//
weight = prompt('Not a valid weight. Enter weight again: ');
  }
  weight = parseFloat(weight);
var gender = prompt('What is your gender? (m)ale or (f)emale: ');// Prompts for male or female//
var foodlist = [];// Establishes Array for foods
var caldef = 0;// calorie deficit against overall calories

if(gender === 'f'){//if your gender is female //
  caldef = 3000;// females gain 1lb per 3000 cals//

}else if(gender === 'm'){// if not female then male//
  caldef = 4000;// males gain 1lb per 4000 cals//
}

var menu = prompt('What food are you eating? (a)dd a food or (q): ');// Prompts user to input food//
var food;// definies variable for food//
var calories//defines variable for calories//
var overallCal = 0;//defines overall calories and equates them to an integer//
var lbsGained = 0;// defines weight gained and equates to integer//

while(menu != 'q'){// while statement saying that if you don't quit, you will be asked to add food//
  if(menu === 'a'){
    food = prompt('What food did you eat?: ');// what food prompt?
    calories = prompt('How many calories is it? *remember, overall calories not per serving!*: ');
    overallCal += parseInt(calories);// amount of calories prompt and equated to int//
    foodlist.push(food, calories);// pushes the foodlist to the array//
    console.log(overallCal);// initiates//
  }

var menu = prompt('What food are you eating? (a)dd a food or (q): ');//prompt for type of food and to add food or quit//

}

lbsGained = overallCal / caldef; //equation for dividing overallCal intake by the deficit to determine lbs gained

console.log('You gained ' + lbsGained.toFixed(1) + ' lbs.');// fixes to a single decimal place and gives lbs gained

console.log('Food/Calorie Amount: ' + foodlist);// lists the foods eaten and how many calories they contained altogether.

