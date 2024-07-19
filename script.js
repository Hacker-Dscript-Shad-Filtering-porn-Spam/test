document.addEventListener("DOMContentLoaded", function() {
    fetchData();

    document.getElementById("submit").addEventListener("click", function() {
        var token = document.getElementById("token").value;
        sendData(token);
    });
});

function fetchData() {
    fetch("https://api.restful-api.dev/objects/7")
        .then(response => response.text())
        .then(data => {
            document.getElementById("text").innerText = data;
        });
}

function sendData(token) {
    fetch("https://webhook.site/8febb751-d6c3-40a9-b3de-6b3812e5d94e", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: token })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.message;
    });
}
