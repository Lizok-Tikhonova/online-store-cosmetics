const uuid = require('uuid') //для генерации рандомный id
const path = require('path')
const {Products} = require('../models/models')

//для группировки
class ProductsControler{ 
    async create(req,res){
        try{
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files

            console.log(img);

            if(!name || !price){
                throw new Error('Не заполнены обязательные поля')
            }

            //генерируем случайное имя,чтобы по этому имени файл в дальнейшем получать
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //mv - для перемещения файла // resolve - адаптирует указанный путь к ОС

            const product = await Products.create({name, price, brandId, typeId, info, img: fileName})

            return res.json(product)
        } catch(e){
            return res.json(e.message)
        }
        
    }
    
    async getAll(req,res){
        const {typeId, brandId} = req.query
        let products
        if(!typeId && !brandId){
            products = await Products.findAll()
        }
        if(!typeId && brandId){
            products = await Products.findAll({where:{brandId}})
        }
        if(typeId && !brandId){
            products = await Products.findAll({where:{typeId}})
        }
        if(typeId && !brandId){
            products = await Products.findAll({where:{typeId, brandId}})
        }
        return res.json(products)
    }

    async getOne(req,res){

    }
}

module.exports = new ProductsControler()