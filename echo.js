document.addEventListener("DOMContentLoaded", function () {
    var socket = io("http://localhost:5000");
    socket.on("connect", function () {
        console.log("接続しました!");
    });
    socket.on("disconnect", function () {
        console.log("切断しました!");
    });
    socket.on("message", function (data) {
        console.log("データ受け取ったよ: " + data);
    });
});
