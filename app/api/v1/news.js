const Router = require('koa-router')
const { NewsListValidator } = require('../../validators/validator')

const router = new Router()

router.post('/news/list',async (ctx) => {
  const v = await new NewsListValidator().validate(ctx)
  console.log(v.get('body.name'))
  // const body = ctx.request.body
  // console.log('name:' + body.name)
  ctx.body = 'news list'
})

module.exports = router
