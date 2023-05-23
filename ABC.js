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
