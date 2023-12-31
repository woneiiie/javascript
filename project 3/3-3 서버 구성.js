// 웹 서버를 생성하고 실행
const express = require('express');
const app = express();
const server = require('http').Server(app);
app.use(express.static('${_dirname}/public'));
server.listen(52273);

// 소켓 서버를 생성하고 실행
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    socket.on('line', (data) => {
        io.sockets.emit('line', data);
    });
});