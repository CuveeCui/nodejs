function async_fun() {
	setTimeout(function(){
		return '123'
	},1000)
}

function * ger(x) {
	let sqlData = yield async_fun();
	return sqlData;
}

let g = ger(1);
console.log(g.next());
console.log(222);