//Question class and constructor
class Question {
    // public ask: string;
    // public ans01: string;
    // public ans02: string;
    // public ans03: string;
    // public points: number = 20;

    constructor(public ask: string,
                public ans01: string,
                public ans02: string,
                public ans03: string,
                public correctAnswer: string,
                public points: number) {
        // this.ask = ask;
        // this.ans01 = ans01;
        // this.ans02 = ans02;
        // this.ans03 = ans03;
        // this.correctAnswer = correctAnswer;
        // this.points = points;
    }

    
}
//5 questions build
let question01 = new Question("What is the capital of Texas?", "A. Dallas", "B. Houston", "C. Austin", "C", 20);
let question02 = new Question("What is the opposite of down?", "A. Up", "B. Left", "C. Right", "A", 20);
let question03 = new Question("What is 2+2?", "A. 2", "B. 3", "C. 4", "C", 20);
let question04 = new Question("Blue and yellow makes what?", "A. Green", "B. Brown", "C. Red", "A", 20);
let question05 = new Question("How many sides to a square?", "A. 4", " B. 3", "C. 2", "A", 20);

let quizScore = 0; 

//Question 1 prompt to user
let result1: string = window.prompt(`Question 1:   (${question01.points} points)

    ${question01.ask}
        ${question01.ans01}
        ${question01.ans02}
        ${question01.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result1 = result1.toUpperCase();

if (_result1 === question01.correctAnswer){

    quizScore = quizScore + question01.points;
    
    alert(`That's correct!

    You earned ${question01.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result1);
console.log(question01.correctAnswer);

//Question 2 prompt to user
let result2 = window.prompt(`Question 2:   (${question02.points} points)

    ${question02.ask}
        ${question02.ans01}
        ${question02.ans02}
        ${question02.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result2 = result2.toUpperCase();

if (_result2 === question02.correctAnswer){

    quizScore = quizScore + question02.points;
    
    alert(`That's correct!

    You earned ${question02.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result2);
console.log(question02.correctAnswer);

//Question 3 prompt to user
let result3: string = window.prompt(`Question 3:   (${question03.points} points)

    ${question03.ask}
        ${question03.ans01}
        ${question03.ans02}
        ${question03.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result3 = result3.toUpperCase();

if (_result3 === question03.correctAnswer){

    quizScore = quizScore + question03.points;
    
    alert(`That's correct!

    You earned ${question03.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result3);
console.log(question03.correctAnswer);

//Question 4 prompt to user
let result: string = window.prompt(`Question 4:   (${question04.points} points)

    ${question04.ask}
        ${question04.ans01}
        ${question04.ans02}
        ${question04.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result4 = result.toUpperCase();

if (_result4 === question04.correctAnswer){

    quizScore = quizScore + question04.points;
    
    alert(`That's correct!

    You earned ${question04.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result4);
console.log(question04.correctAnswer);

//Question 5 prompt to user
let result5: string = window.prompt(`Question 5:   (${question05.points} points)

    ${question05.ask}
        ${question05.ans01}
        ${question05.ans02}
        ${question05.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result5 = result.toUpperCase();

if (_result5 === question05.correctAnswer){

    quizScore = quizScore + question05.points;
    
    alert(`That's correct!

    You earned ${question05.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}
alert(`That all folks....
Final quiz score : ${quizScore}`);

console.log(_result5);
console.log(question01.correctAnswer);