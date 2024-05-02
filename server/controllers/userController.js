const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        'secret_key',
        {expiresIn: '24h'} //сколько живет токен
    )
}


class UserControler{ //для группировки
    async registration(req,res){
        try{
            const {login, password, role} = req.body
            if(!login || !password){
                return res.status(400).json({message: 'Поля логина или пароля не могут быть пустыми'})
            }
            const userCheck = await User.findOne({where: {login}})
            if(userCheck){
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }

            const hashPassword = await bcrypt.hash(password, 5) // хэшируем пароль, чтобы не хранить в открытиом доступе(5-сколько раз хэшируем)
            const user = await User.create({login, role, password: hashPassword})
            const basket = await Basket.create({userId: user.id, login, role})

            console.log(user);
            const token = generateJwt(user.id, user.login, user.role)
            return res.json({token})

        } catch(e){
            console.log(e);
            res.status(400).json({message: 'Ошибка регистрации'})
        }
        
    }

    async login(req,res){
        
    }


    async check(req, res){
        try{
            const {id} = req.query //отдельный параметр после знака вопроса
            if(!id){
                throw new Error('Не указан параметр')
            }
            res.json(id)
        } catch(e){
            return res.status(400).json(e.message)
        }
    }
}

module.exports = new UserControler()