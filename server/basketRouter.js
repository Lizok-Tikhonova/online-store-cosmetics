const Router = require('express')
const router = new Router() // обект маршрута
const basketController = require('../controllers/BasketController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', authMiddleware, basketController.add)
router.get('/:basketId', basketController.getListUser)
router.put('/plus', basketController.countPlus)
router.put('/minus', basketController.countMinus)
router.delete('/:basketId/:productId', basketController.deleteItemList)
router.delete('/', basketController.clearBasket)

module.exports = router  