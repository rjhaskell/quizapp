//Question class w/constructor
class Question {
    constructor(public ask: string,
        public answerChoice1: string,
        public answerChoice2: string,
        public answerChoice3: string,
        public correctAnswer: string,
        public points: number = 20) {
    }
}

//Question bank with answer choices, correct answer, and initial point values
let q01 = new Question("What is the capital of Texas?", "A. Dallas", "B. Houston", "C. Austin", "C", 20);
let q02 = new Question("What is the opposite of down?", "A. Up", "B. Left", "C. Right", "A", 20);
let q03 = new Question("What is 2+2?", "A. 2", "B. 3", "C. 4", "C", 20);
let q04 = new Question("Blue and yellow makes what?", "A. Green", "B. Brown", "C. Red", "A", 20);
let q05 = new Question("How many sides to a square?", "A. 4", " B. 3", "C. 2", "A", 20);

//Initailize running total score
let quizScore = 0;

//Each question has it's own function 1111111111111111111111111111111111111111
function question01() {

    //Promopt user for answer
    let result01: string = window.prompt(`Question 1:   (${q01.points} points)

    ${q01.ask}
        ${q01.answerChoice1}
        ${q01.answerChoice2}
        ${q01.answerChoice3}`,
        `Your answer: A, B, or C (NOT case sensitive)`);

    //In-process user answer
    let _result01 = result01.toUpperCase();

    //Show positive result 
    if (_result01 === q01.correctAnswer) {

        //Increase running total score by current question value
        quizScore = quizScore + q01.points;
        alert(`That's correct!

    You earned (${q01.points}) points.
    Total quiz score so far: ${quizScore}`);
    }

    //Show negative result//
     else {
        
        //Reduce question value by 1 and ....
        q01.points = q01.points - 1;
        alert(`Oops... wrong answer.

    Hit "OK" to try again.

    Total quiz score so far: ${quizScore}`);
        //.... try again
        question01();
    };
};

//2222222222222222222222222222222222222222222222222222222222222222222222222222
function question02() {

    //Promopt user for answer
    let result02: string = window.prompt(`Question 2:   (${q02.points} points)

    ${q02.ask}
        ${q02.answerChoice1}
        ${q02.answerChoice2}
        ${q02.answerChoice3}`,
        `Your answer: A, B, or C (NOT case sensitive)`);

    //In-process user answer
    let _result02 = result02.toUpperCase();

    //Show positive result 
    if (_result02 === q02.correctAnswer) {

        //Increase running total score by current question value
        quizScore = quizScore + q02.points;
        alert(`That's correct!

    You earned (${q02.points}) points.
    Total quiz score so far: ${quizScore}`);
    }

    //Show negative result//
     else {
        
        //Reduce question value by 1 and ....
        q02.points = q02.points - 1;
        alert(`Oops... wrong answer.

    Hit "OK" to try again.

    Total quiz score so far: ${quizScore}`);
        //.... try again
        question02();
    };
};

//3333333333333333333333333333333333333333333333333333333333333333333333333333
function question03() {

    //Promopt user for answer
    let result03: string = window.prompt(`Question 3:   (${q03.points} points)

    ${q03.ask}
        ${q03.answerChoice1}
        ${q03.answerChoice2}
        ${q03.answerChoice3}`,
        `Your answer: A, B, or C (NOT case sensitive)`);

    //In-process user answer
    let _result03 = result03.toUpperCase();

    //Show positive result 
    if (_result03 === q03.correctAnswer) {

        //Increase running total score by current question value
        quizScore = quizScore + q03.points;
        alert(`That's correct!

    You earned (${q03.points}) points.
    Total quiz score so far: ${quizScore}`);
    }

    //Show negative result//
     else {
        
        //Reduce question value by 1 and ....
        q03.points = q03.points - 1;
        alert(`Oops... wrong answer.

    Hit "OK" to try again.

    Total quiz score so far: ${quizScore}`);
        //.... try again
        question03();
    };
};

question01();
question02();
question03();

alert(`That all folks....
Final quiz score : ${quizScore}`);