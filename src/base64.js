let fs = require('fs');

fs.readFile('logo.png',function(err,origin_buffer) {
	console.log(Buffer.isBuffer(origin_buffer));
	fs.writeFile('logo_buffer.png',origin_buffer,function(err) {
		if (err) throw err;
	})

	let base64Img = origin_buffer.toString('base64');
	console.log(base64Img);
	let decodeImg = new Buffer(base64Img,'base64');
	console.log(Buffer.compare(origin_buffer,decodeImg));

	fs.writeFile('logo_decoded.png',decodeImg,function(err) {
		if (err) throw err;
	})
})