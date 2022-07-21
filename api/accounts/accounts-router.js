const router = require('express').Router()
const md = require("./accounts-middleware")
const Account = require("../accounts/accounts-model")

router.get('/' ,async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const accounts = await Account.getAll()
    res.json(accounts)

  }catch(err){
    next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
res.json(req.account)
})



router.post('/', md.checkAccountPayload,md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json("post account")

  }catch(err){
    next(err)
  }
})


router.put('/:id', md.checkAccountId,
md.checkAccountNameUnique,
md.checkAccountPayload,
(req, res, next) => {
  try{
    res.json("put account")

  }catch(err){
    next(err)
  }
})



router.delete('/:id',md.checkAccountId, (req, res, next) => {
  try{
    res.json("delete account")

  }catch(err){
    next({ status:422, message: "this is horrible"})
  }
})


router.use((err, req, res, next) => { // eslint-disable-line
 res.status(err.status || 500).json({
  message: err.message,
 })

})


module.exports = router;
