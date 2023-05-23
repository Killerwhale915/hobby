const correctAnswer1 = "다이아몬드";
const correctAnswer2 = "킹콩";
const correctAnswer3 = "뱀파이어";

let numCorrectAnswers = 0;

//첫번째 문제의 정답을 확인하는 함수
function checkAnswer1() {
    const userAnswer = document.getElementById("answer1").value.trim();

    if (userAnswer === correctAnswer1) {
        alert("정답입니다!");
        numCorrectAnswers++;
        NextQuestion();
    } else {
        alert("틀렸습니다. 다시 시도해보세요.");
    }
}

//두번째 문제의 정답을 확인하는 함수
function checkAnswer2() {
    const userAnswer = document.getElementById("answer2").value.trim();

    if (userAnswer === correctAnswer2) {
        alert("정답입니다!");
        numCorrectAnswers++;
        NextQuestion();
    } else {
        alert("틀렸습니다. 다시 시도해보세요.");
    }
}

//세번째 문제의 정답을 확인하는 함수
function checkAnswer3() {
    const userAnswer = document.getElementById("answer3").value.trim();

    if (userAnswer === correctAnswer3) {
        alert("정답입니다!");
        numCorrectAnswers++;
        NextQuestion();
        quizSection.innerHTML =
            '<a href="index.html" target="_self">메인으로 이동하기</a>';
    } else {
        alert("틀렸습니다. 다시 시도해보세요.");
    }
}

//정답이 맞으면 다음 문제를 보여주는 함수
function NextQuestion() {
    const quizSection = document.getElementById("quizSection");

    if (numCorrectAnswers === 1) {
        quizSection.innerHTML = `
            <p>왕이 넘어지면?</p>
            <input type="text" id="answer2" />
            <button onclick="checkAnswer2()">제출</button>
        `;
    } else if (numCorrectAnswers === 2) {
        quizSection.innerHTML = `
            <p>뱀이 불에 타면?</p>
            <input type="text" id="answer3" />
            <button onclick="checkAnswer3()">제출</button>
        `;
    } else {
        alert("축하합니다! 모든 문제를 맞추셨습니다!");
    }
}
