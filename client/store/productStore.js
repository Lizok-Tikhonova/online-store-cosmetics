import { makeAutoObservable } from "mobx"

export default class productStore{
    constructor() {
        this._types = [
            {id:1, name: 'Сертификаты'},
            {id:2, name: 'Шампуни'}
        ]
        this._brands = [
            {id:1, name: 'Ollin'},
            {id:2, name: 'Shauma'}
        ]
        this._prducts = [
            {id:1, name: 'Шампунь для окрашенных волос', price: 600, img: 'https://i.pinimg.com/736x/4d/4a/13/4d4a13e77bb5eb6536a4239d28d17b65.jpg'},
            {id:2, name: 'Оттеночный шампунь', price: 450, img: 'https://i.pinimg.com/736x/4d/4a/13/4d4a13e77bb5eb6536a4239d28d17b65.jpg'},
            {id:3, name: 'Реконструкция волос', price: 700, img: 'https://i.pinimg.com/736x/4d/4a/13/4d4a13e77bb5eb6536a4239d28d17b65.jpg'},
            {id:4, name: 'Востановление волос', price: 550, img: 'https://i.pinimg.com/736x/4d/4a/13/4d4a13e77bb5eb6536a4239d28d17b65.jpg'}
        ]
        makeAutoObservable(this) 
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }
    
    setProduct(products){
        this._products = products
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }
    
    get products(){
        return this._products
    }

}