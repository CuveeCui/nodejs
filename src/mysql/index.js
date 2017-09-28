let mysql = require('mysql');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let apiRouter = express.Router();
// 链接数据库
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'cy19900826',
	port: '3306',
	database: 'fund'
});
connection.connect(err => {
	if (err) {
		console.log('[query] - :' + err);
		return;
	}
	console.log('[connection connect] succeed!')
})
// 静态资源地址
app.use(express.static(__dirname));
// 登录接口地址
apiRouter.post('/login',bodyParser.json(),(req,res) => {
	if (!req.body) {
		return res.sendStatus(400);
	}
	connection.query('SELECT * from userInfo', (err,rows,fields) => {
		if (err) {
			console.log('[query] - :' + err);
			return;
		}
		let success = false;
		let reqData = req.body;
		rows.forEach(item => {
			if (item.name === reqData.name && item.pwd === reqData.pwd) {
				success = true
			}
		})
		if (success) {
			res.json({
				errno: 0,
				message: '验证通过'
			})
		} else {
			res.json({
				errno: 1,
				message: '用户名或者密码不正确！'
			})
		}
	})
})
// 注册接口地址
apiRouter.post('/register',bodyParser.json(),(req,res) => {
	if (!req.body) {
		return res.sendStatus(400);
	}
	connection.query('SELECT * from userInfo', (err,rows,fields) => {
		if (err) {
			console.log('[query] - :' + err);
			return;
		}
		let success = true;
		let reqData = req.body;
		let length = rows.length;
		rows.forEach(item => {
			if (item.name === reqData.name) {
				success = false;
			}
		})
		if (success) {
			console.log(111);
			connection.query(`INSERT INTO userInfo(id,name,pwd) VALUES(${length},"${reqData.name}","${reqData.pwd}")`, (err,result) => {
				if (err) throw err;
				res.json({
					errno: 0,
					message: 'success'
				})
			})
		} else {
			res.json({
				errno: 1,
				message: '该用户名已注册'
			})
		}
	})
})
// 使用路由中间件
app.use('/api',apiRouter);

// 开启服务，监听8260端口
app.listen(8260,() => {
	console.log('Server is running at http:localhost:8260');
})

