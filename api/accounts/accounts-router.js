const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json("get account")

  }catch(err){
    next({ status:422, message: "this is horrible"})
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json("get account by id")

  }catch(err){
    next({ status:422, message: "this is horrible"})
  }
})



router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json("post account")

  }catch(err){
    next(err)
  }
})


router.put('/:id', (req, res, next) => {
  try{
    res.json("put account")

  }catch(err){
    next({ status:422, message: "this is horrible"})
  }
})



router.delete('/:id', (req, res, next) => {
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
