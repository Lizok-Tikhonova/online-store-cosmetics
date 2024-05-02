const { request } = require('express')
const {Brand} = require('../models/models')


class BrandControler{ //для группировки
    async create(req,res){
        const {name} = req.body
        const brand = await Brand.create({name}) //функция принимает объект, где указываем нужные поля
        return res.json(brand)
    }
    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandControler()