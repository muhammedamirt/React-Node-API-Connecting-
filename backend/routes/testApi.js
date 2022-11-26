// this page for create api router

const Express = require('express')
const router = Express.Router()

router.get('/',(req,res,next)=>{
    res.send('API is working')
})

module.exports = router