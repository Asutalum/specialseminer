var http = require("http");
var static = require("node-static");
var file = new static.Server(".");
var app = http.createServer(function (req, res) {
    file.serve(req, res);
});

var io = require("socket.io")(app, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
var port = 5000;
app.listen(port, function () {
    console.log("サーバ起動：" + port);
});

io.on("connection", function (socket) {
    console.log("a user connected");
    socket.send("Hello!");
    socket.on("message", function (data) {
        console.log("ブラウザから送られてきたデータ：" + data);
        socket.send(data);
    });
});
