// 기본 통신 코드 - 서버

// 서버를 생성합니다.
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// 서버를 실행합니다.
server.listen(52273);

app.get('/', (req, res) => {
    res.sendfile(_dirname + '/index.html');
});

io.on('connection', (soket) => {
    Socket.emit('news', {
        hello: 'world'
    });
    Socket.on('other event', (data) => {
        console.log(data);
    });
});