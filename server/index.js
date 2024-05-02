const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const path = require('path')

//маршруты
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const brandRouter = require('./routes/brandRouter')
const typeRouter = require('./routes/typeRouter')


const PORT = 5000

const app = express()
app.use(express.json()) //чтобы приложение могло парсить json формат
app.use(fileUpload({}))
app.use(express.static('static'))


const start = async () => {
    try {
        await sequelize.authenticate() // функция для подключения к бд
        await sequelize.sync() // функция сверяет состояние бд со схемой данных, создает таблицы, если их нет
        app.listen(PORT, () => console.log('Start'))
    } catch (error) {
        console.log(error);
    }
}

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/type', typeRouter)
app.use('/api/brand', brandRouter)

app.get('/', (req,res)=>{
    res.send('Пока получилось!!!')
})

start()
