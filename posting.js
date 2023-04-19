function submitForm() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;
    var logElement = document.getElementById("log");
    logElement.innerHTML += "이름: " + name + "<br>글 내용: " + text + "<hr>";
}
