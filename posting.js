function submitForm() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;

    var data = {
        name: name,
        text: text,
    };

    if (localStorage.getItem("postData") == null) {
        var postData = [];
        postData.push(data);
        localStorage.setItem("postData", JSON.stringify(postData));
    } else {
        var postData = JSON.parse(localStorage.getItem("postData"));
        postData.push(data);
        localStorage.setItem("postData", JSON.stringify(postData));
    }

    var logElement = document.getElementById("log");
    logElement.innerHTML +=
        "이름: " + name + "<br>글 내용 : " + text + "<br><br>";
}

function loadData() {
    var postData = JSON.parse(localStorage.getItem("postData"));

    if (postData != null) {
        var logElement = document.getElementById("log");
        for (var i = 0; i < postData.length; i++) {
            logElement.innerHTML +=
                "<br><br>이름 : " +
                postData[i].name +
                "<br>글 내용 : " +
                postData[i].text +
                "<br><br>";
        }
    }
}
function clearData() {
    localStorage.removeItem("postData");
    var logElement = document.getElementById("log");
    logElement.innerHTML = "";
}
