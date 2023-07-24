let http = require('http');
let static = require('node_static');
let file = new static.Server('.');
let app = http.createServer(function (request, response) {
    file.serve(req, res);
});
let Server = require('websocket.io').attach(app);

app.listen(8888,
    function () { console.log('サーバ起動'); }
);