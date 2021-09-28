const Router = require('koa-router')
const router = new Router()
router.get('/index',ctx=>{
    ctx.body="<h2>这是index页面</h2>"
})

module.exports = router