var round = 0;
var correct = 0;
var question1 = {question: "This ballet, composed by Igor Stravinsky and choreographed by Vaslav Nijinsky, almost caused a riot at its 1913 premiere.", choices: "A - Coppelia\nB - The Rite of Spring\nC - Les Sylphides\nD - The Nutcracker", answer: "b"};

var question2 = {question: "Twyla Tharp won a Tony for Best Choroeography in 2003 for this Broadway show, based on the music of Billy Joel.", choices: "A - Kinky Boots\nB - Spiderman: Turn Off the Dark\nC - Movin' Out\nD - Hairspray", answer: "c"};

var question3 = {question: "An average cat has this many tails.", choices: "A - 1\nB - 2\nC - 3\nD - 4", answer: "a" };

var question4 = {question: "This is not gluten free.", choices: "A - a Nectarine\nB - a Brussel Sprout\nC - a Chicken Egg\nD - a Beer", answer: "d" };

var questions = [question1, question2, question3, question4];

function next_question() {
  var questionDiv = document.getElementById("question");
  questionDiv.innerText = questions[round].question;
  var choicesDiv = document.getElementById("choices");
  choicesDiv.innerText = questions[round].choices;
}

function given_answer() {
  return document.getElementById("answer").value
};

function is_correct_answer(answer_text) {
  if (answer_text.toLowerCase() === questions[round].answer) {
      correct++;
      return true;
  } else {
      return false;
  }   
};

function update_question_result(correct) {
  if (correct === true) {
    document.getElementById("question_result").innerText = "Success!"
  } else {
    document.getElementById("question_result").innerText = "Wrong!"
  }
};

function process_answer_submission() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
};

document.getElementById("submitter").onclick = process_answer_submission;

function next_button() {
  document.getElementById("answer").value = "";
  document.getElementById("question_result").value = "";
  round++;
  if (round !== questions.length) {
      next_question();
  } else {
    final_total();
  }

}

document.getElementById("next").onclick = next_button;

function final_total() {
  var final_statement = "You answered " + correct + " out of " + questions.length + "!\nThat's " + (correct / questions.length * 100).toFixed(0) + "% correct";
  document.getElementById("total_result").innerText = final_statement;
}