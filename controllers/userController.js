class UserControler{ //для группировки
    async registration(req,res){

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
            return res.json(e.message)
        }
        
    }
}

module.exports = new UserControler()