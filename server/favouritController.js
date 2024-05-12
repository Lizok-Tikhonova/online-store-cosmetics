const {FavouritList} = require('../models/models')
const sequelize = require('../db')

class FavouritController{ //для группировки
    async add(req, res){ 
        try {
            const {favouritId, productId} = req.body
            if(!favouritId || !productId){
                return res.status(400).json({message: 'Нет обязательных параметров'})
            }
            const itemFavourit = await FavouritList.create({favouritId, productId})
            return res.json(itemFavourit)
        } catch (error) {
            return res.status(400).json({message: 'Ошибка добавления товара в избранное'})
        }
         
    }   
    
    async getListFavourit(req, res){   
        const {favouritId} = req.params
        const list = await sequelize.query(`select id, name, price, img from products, favourit_lists
        where products.id = favourit_lists."productId" and favourit_lists."favouritId" = ${favouritId}`,
        { type: sequelize.QueryTypes.SELECT})
        return res.json(list)
    }

    async deleteItemList(req, res){ 
        try {
            const{favouritId, productId} = req.params
            if(!favouritId || !productId){
                return res.status(400).json({message: 'Нет обязательных параметров'})
            }
            const list = await FavouritList.destroy({where:{favouritId, productId}})
            return res.json(list)  
        } catch (error) {
            return res.status(400).json({message: 'Ошибка удаления'})
        }     
    } 
}     
  
module.exports = new FavouritController() 