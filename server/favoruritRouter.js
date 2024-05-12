const Router = require('express')
const router = new Router() // обект маршрута
const favouritController = require('../controllers/favouritController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', favouritController.add)
router.get('/:favouritId', favouritController.getListFavourit)
router.delete('/:favouritId/:productId', favouritController.deleteItemList)


module.exports = router