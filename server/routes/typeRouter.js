const Router = require('express')
const router = new Router() // обект маршрута
const typeController = require('../controllers/typeController')


//добавление типа
router.post('/', typeController.create)
//получение всех типов
router.get('/', typeController.getAll)

module.exports = router