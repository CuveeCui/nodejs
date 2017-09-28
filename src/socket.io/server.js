let express = require('express');

let io = require('socket.io');


let app = express();

// 静态资源地址
app.use(express.static(__dirname));

let server = require('http').Server(app);


// 创建socket服务
let socketIo = io(server);

// 建立与客户端的连接
socketIo.on('connection',socket => {
   console.log('a user connected');
    socket.on('disconnect',() => {
        console.log('user disconnected')
    });
    socket.on('chat message',msg => {
        console.log('message:' + msg);
        socketIo.emit('chat message',msg);
    })
});

app.set('port',process.env.PORT || 3000);

server.listen(app.get('port'),() => {
   console.log('Server is running at http://localhost:3000')
});