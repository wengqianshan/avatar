const Koa = require('koa');
const Router = require('@koa/router');
const handle = require('./handle');

const app = new Koa();
const router = new Router();

router.get('/:id', (ctx, next) => {
  const { id } = ctx.params;
  ctx.set('Content-Type', 'image/svg+xml');
  const code = handle(id);
  ctx.body = code;
});

router.get('/', (ctx, next) => {
  ctx.body = '头像生成服务';
});

app.use(router.routes()).use(router.allowedMethods()).listen(3690);

/**
 * 转 png
const { convert } = require('convert-svg-to-png');
const code = handle(id);
const png = await convert(code, {
  width: 500,
  height: 500,
});
ctx.set('Content-Type', 'image/png');
ctx.body = png;
 */
