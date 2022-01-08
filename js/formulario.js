var answers = {};



var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');
var question_eleven = document.getElementById('question-11');

function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        console.log(event.target.value);
        answers['question' + question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function (event) {
    storeAnswer(1, event)
})
question_two.addEventListener('click', function (event) {
    storeAnswer(2, event)
})
question_three.addEventListener('click', function (event) {
    storeAnswer(3, event)
})
question_four.addEventListener('click', function (event) {
    storeAnswer(4, event)
})
question_five.addEventListener('click', function (event) {
    storeAnswer(5, event)
})
question_six.addEventListener('click', function (event) {
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function (event) {
    storeAnswer(7, event)
})
question_eight.addEventListener('click', function (event) {
    storeAnswer(8, event)
})
question_nine.addEventListener('click', function (event) {
    storeAnswer(9, event)
})
question_ten.addEventListener('click', function (event) {
    storeAnswer(10, event)
})
question_eleven.addEventListener('click', function (event) {
    storeAnswer(11, event)
})

function totalScore() {
    var total_score =
        answers.question1 +
        answers.question2 +
        answers.question3 +
        answers.question4 +
        answers.question5 +
        answers.question6 +
        answers.question7 +
        answers.question8 +
        answers.question9 +
        answers.question10 +
        answers.question11;

    return total_score;
}

var perfil = undefined;

function getInfoBasedOnScore() {
    if (totalScore() == 0) {
        var score_info = "Responda Corretamente.";
    }else if (totalScore() <= 14) {
        var score_info = "Você possui o perfil conservador.";
        perfil = "conservador";
    } else if (totalScore() >= 36) {
        var score_info = "Você possui o perfil Arrojado."
        perfil = "arrojado";
    }
    else {
        var score_info = "Você possui o perfil moderado."
        perfil = "moderado";
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');
var submit11 = document.getElementById('submit11');

function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function () {
    nextQuestion(2);
    growProgressBar('18%');
})
submit2.addEventListener('click', function () {
    nextQuestion(3);
    growProgressBar('27%');
})
submit3.addEventListener('click', function () {
    nextQuestion(4);
    growProgressBar('36%');
})
submit4.addEventListener('click', function () {
    nextQuestion(5);
    growProgressBar('45%');
})
submit5.addEventListener('click', function () {
    nextQuestion(6);
    growProgressBar('54%');
})
submit6.addEventListener('click', function () {
    nextQuestion(7);
    growProgressBar('63%');
})
submit7.addEventListener('click', function () {
    nextQuestion(8);
    growProgressBar('72%');
})
submit8.addEventListener('click', function () {
    nextQuestion(9);
    growProgressBar('81%');
})
submit9.addEventListener('click', function () {
    nextQuestion(10);
    growProgressBar('90%');
})
submit10.addEventListener('click', function () {
    nextQuestion(11);
    growProgressBar('100%');
})
submit11.addEventListener('click', function () {
    nextQuestion(12);
})

submit11.addEventListener('click', function () {
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

const botao = document.getElementById('ver-conteudos');

botao.addEventListener('click', () => {
    if (perfil != undefined) {
        window.location.href = `playlist.html?categoria=perfil-${perfil}`;
    } else {
        window.location.href = '../';
    }
});