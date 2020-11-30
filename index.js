var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
console.log(chalk.cyan.bgGrey.bold("Hello There"))
var askName = readlineSync.question("Enter your name: ")
console.log("Welcome " + chalk.cyan(askName.toUpperCase()) + " to " +  chalk.magenta.bold('Death Note') + " Quiz")
console.log(chalk.redBright.bold("QUIZ RULES :"))
console.log(chalk.bold.grey("\t 1. There will total of 10 questions.\n\t 2. Answer the questions with a,b,c or d \n\t 3. For each correct answer there is 3 marks.\n\t 4. For every wrong answer there is a reward of -1 marks.\n\t 5. Total score will be displayed at the end of quiz."));

 
function quiz(question,answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("RIGHT!"));
    score = score + 3;
  }
  else {
    console.log(chalk.red("WRONG!"));
    console.log(chalk.blue.italic("the correct answer is " + currentQuestion.answer))
    score = score - 1;
  }
  console.log("Your score is: ", chalk.cyanBright.bold.underline(score));
  console.log("________________________")
}

var questions = [
  {
    question: "\n 1. What is a Death Note? \n\t a) a complex assassination plot \n\t b) a black notebook \n\t c) a 30 second video \n\t d) a small piece of paper \n" + "Enter your choice: " ,
    answer:"b"
  },
  { question: "\n 2. What must you know about a person to use the Death Note? \n\t a) name  \n\t b) face  \n\t c) name and face  \n\t d)name, face and date of birth \n" + "Enter your choice: " ,
   answer:"c"

  },
  {
    question: "\n 3. What does L do for a living? \n\t a) heads a rock band  \n\t b) runs a school  \n\t c) solves mysteries  \n\t d) go to school \n" + "Enter your choice: " ,
   answer: "c"
  },
  {
    question: "\n 4. Light's father works as what? \n\t a) head of a large stock trading firm  \n\t b)custodian at Light's school   \n\t c) talent manager for Misa  \n\t d) police chief \n" + "Enter your choice: " ,
    answer: "d"
  },
  {

    question: "\n 5.What is Misa Amane's profession? \n\t a) Model \n\t b) Singer  \n\t c) Basketball Player  \n\t d) Reporter \n" + "Enter your choice: " ,
   answer: "a"
  },
   {
    question: "\n 6. How does Misa get a Death Note? \n\t a) She steals it from Light.  \n\t b) She offers 1/4 of her lifespan.  \n\t c) She finds it in the subway.  \n\t d) A Shinigami sacrifices its life to save hers. \n" + "Enter your choice: " ,
   answer: "d"
  },
  {
    question: "\n 7.What do Shinigami eyes allow you to see? \n\t a) a person's name and lifespan \n\t b) the condition of a person's soul  \n\t c) the secrets a person wants to hide  \n\t d) the spirit world \n" + "Enter your choice: " ,
   answer: "a"
  },
  {
    question: "\n 8. Who uses Ryuk's notebook? \n\t a) Light  \n\t b) Misa  \n\t c) No one - he never lets humans touch it.  \n\t d) Rem \n" + "Enter your choice: " ,
   answer: "c"
  },
  {
    question: "\n 9.What happens to Misa at the end of the anime? \n\t a)She is also killed by Ryuk.  \n\t b) She is captured and incarcerated.  \n\t c) She is shot by an American agent.  \n\t d) We don't know. \n" + "Enter your choice: " ,
   answer: "d"
  },
  {
    question: "\n 10. What motivates Light to start using the Death Note? \n\t a) a desire for justice  \n\t b) a desire for power  \n\t c) a desire for peace  \n\t d) all of the above \n" + "Enter your choice: " ,
   answer: "d"
  },
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

 quiz(currentQuestion.question,currentQuestion.answer)
}
console.log(" ");
console.log("total score is: ", chalk.cyanBright.bold(score));

var highScorer = [
  {
    name : "Parimal",
    score : 30
  },
  {
    name : "Vishesh",
    score : 26
  },
]
console.log("List of High scorer: ")
for(i=0; i<highScorer.length; i++){
  var hs = highScorer[i];
  console.log("Name: "+ hs.name + " ||" + "  Score: "+ hs.score);
  console.log("________________________")
  console.log(" ");

}
