function playlist() {
    alert("페이지 준비중입니다.");
}

//퀴즈에 입장할건지 물어보는 함수
function enterQuiz() {
    let quiz = confirm("퀴즈에 입장하시겠습니까? (노잼 주의)");
    if (quiz) {
        window.location.href = "Quiz.html";
    } else {
    }
}

//a와 b를 더하는 함수
function addNumbers(a, b) {
    return a + b;
}

//a와 b중 더 큰 수를 저장하는 함수
function getMaxNumber(a, b) {
    return Math.max(a, b);
}
function displayResults() {
    const sum = addNumbers(5, 3);
    const maxNumber = getMaxNumber(8, 3);
    document.getElementById("sumResult").textContent = sum;
    document.getElementById("MaxResult").textContent = maxNumber;
}

// displayResults 함수 실행
displayResults();
