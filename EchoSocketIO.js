let http = require('http');
let static = require('node-static');
let file = new static.Server('.');
let app = http.createServer(function (request, responce) {
    file.serve(request, responce);
});
let server = require('socket.io')(app);

app.listen(8888,
    function () {
        console.log('サーバ起動');
    });

server.on('connection', function (socket) {
    setTimeout(function () {
        console.log('サーバから1秒後にhello, againを送信');
        socket.emit('message', 'hello', 'again');
    }, 1000);
    socket.on('message', function (data) {
        console.log('ブラウザから来たデータ:' + data);
        socket.emit('message', data);
    })
});