//Question class w/constructor
class Question {
    constructor(public ask: string,
                public ans01: string,
                public ans02: string,
                public ans03: string,
                public correctAnswer: string,
                public points: number = 20) {
    }
}

//5 questions build
let q1 = new Question("What is the capital of Texas?", "A. Dallas", "B. Houston", "C. Austin", "C", 20);
let q2 = new Question("What is the opposite of down?", "A. Up", "B. Left", "C. Right", "A", 20);
let q3 = new Question("What is 2+2?", "A. 2", "B. 3", "C. 4", "C", 20);
let q4 = new Question("Blue and yellow makes what?", "A. Green", "B. Brown", "C. Red", "A", 20);
let q5 = new Question("How many sides to a square?", "A. 4", " B. 3", "C. 2", "A", 20);

let quizScore = 0; 

//Question 1 prompt to user
let result1: string = window.prompt(`Question 1:   (${q1.points} points)

    ${q1.ask}
        ${q1.ans01}
        ${q1.ans02}
        ${q1.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result1 = result1.toUpperCase();

if (_result1 === q1.correctAnswer){

    quizScore = quizScore + q1.points;
    
    alert(`That's correct!

    You earned ${q1.points} points.
    Total quiz score so far: ${quizScore}`);

} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result1);
console.log(q1.correctAnswer);

//Question 2 prompt to user
let result2 = window.prompt(`Question 2:   (${q2.points} points)

    ${q2.ask}
        ${q2.ans01}
        ${q2.ans02}
        ${q2.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result2 = result2.toUpperCase();

if (_result2 === q2.correctAnswer){

    quizScore = quizScore + q2.points;
    
    alert(`That's correct!

    You earned ${q2.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result2);
console.log(q2.correctAnswer);

//Question 3 prompt to user
let result3: string = window.prompt(`Question 3:   (${q3.points} points)

    ${q3.ask}
        ${q3.ans01}
        ${q3.ans02}
        ${q3.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result3 = result3.toUpperCase();

if (_result3 === q3.correctAnswer){

    quizScore = quizScore + q3.points;
    
    alert(`That's correct!

    You earned ${q3.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result3);
console.log(q3.correctAnswer);

//Question 4 prompt to user
let result: string = window.prompt(`Question 4:   (${q4.points} points)

    ${q4.ask}
        ${q4.ans01}
        ${q4.ans02}
        ${q4.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result4 = result.toUpperCase();

if (_result4 === q4.correctAnswer){

    quizScore = quizScore + q4.points;
    
    alert(`That's correct!

    You earned ${q4.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}


console.log(_result4);
console.log(q4.correctAnswer);

//Question 5 prompt to user
let result5: string = window.prompt(`Question 5:   (${q5.points} points)

    ${q5.ask}
        ${q5.ans01}
        ${q5.ans02}
        ${q5.ans03}`,
`Your answer: A, B, or C`);


//Process user answer
let _result5 = result.toUpperCase();

if (_result5 === q5.correctAnswer){

    quizScore = quizScore + q5.points;
    
    alert(`That's correct!

    You earned ${q5.points} points.
    Total quiz score so far: ${quizScore}`);

    //console.log(quizScore);
} else {
    alert(`Oops... wrong answer.

    You earned no points for this question.
    Total quiz score so far: ${quizScore}`);
}
alert(`That all folks....
Final quiz score : ${quizScore}`);