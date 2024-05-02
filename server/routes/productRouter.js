const Router = require('express')
const router = new Router() // обект маршрута
const deviceController = require('../controllers/productController')



router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router