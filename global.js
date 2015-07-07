var round = 0;
var correct_answers = 0;
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
      return true;
  } else {
      return false;
  }   
};

function update_question_result(correct) {
  if (correct === true) {
    correct_answers++;
    document.getElementById("question_result").innerText = "Success!"
  } else {
    document.getElementById("question_result").innerText = "Wrong!"
  }
};

function process_answer_submission() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
  document.getElementById("submitter").style.visibility="hidden";
};

document.getElementById("submitter").onclick = process_answer_submission;

function clear_answer () {
  document.getElementById("answer").value = "";
}

function clear_question_result () {
  document.getElementById("question_result").innerText = "";
}

function is_game_over () {
  if (round < questions.length) {
      return false; 
  } else {
      return true;
  }
};

function next_button() {
  clear_answer();
  clear_question_result();
  round++;
  document.getElementById("submitter").style.visibility="visible";
  if (is_game_over() === true) {
      final_total();
  } else {
      next_question();
  }
}

document.getElementById("next").onclick = next_button;

function final_total() {
  var final_statement = "You answered " + correct_answers + " out of " + questions.length + "!\nThat's " + (correct_answers / questions.length * 100).toFixed(0) + "% correct";
  document.getElementById("total_result").innerText = final_statement;
}