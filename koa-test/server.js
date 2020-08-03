var Koa = require('koa');
var app = new Koa();
var static = require('koa-static');

const main = ctx => {
    ctx.response.body = 'Hello World';
};

// 让 koa 可以处理静态资源文件
app.use(static('.'));

app.use(main);

app.listen(5641);