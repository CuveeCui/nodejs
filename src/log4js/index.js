// log4js是nodejs日志处理中数一数二的模块。比起console或者TJ的debug优势，尤其针对投入生产的nodejs项目来说下面这些事不可少的：

	// 1、日志分级
	// 2、日志分类
	// 3、日志落盘

// let log4js = require('log4js');
// let logger = log4js.getLogger();
// logger.log('Time:', new Date());

// 调用getLogger()可以获得log4js的Logger实例，这个实例的用法与console.log是一致的，可以调用.debug（也可以调用.info、.error等方法）来输出日志。

var log4js = require('log4js');
log4js.configure({
  appenders: {
    type: 'file',
    filename: 'default.log'
  },
  categories: {
  	
  }
})
var logger = log4js.getLogger('custom-appender');
logger.debug("Time:", new Date());
