const {Type} = require('../models/models')

class TypeController{ //для группировки
    async create(req, res){
        const {name} = req.body
        console.log(req.body);
        const type = await Type.create({name}) //функция принимает объект, где указываем нужные поля
        return res.json(type)
    }
    
    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()