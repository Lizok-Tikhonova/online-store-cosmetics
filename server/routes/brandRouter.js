const Router = require('express')
const router = new Router() // обект маршрута
const brandController = require('../controllers/brandController')


router.post('/', brandController.create)
router.get('/', brandController.getAll)

module.exports = router