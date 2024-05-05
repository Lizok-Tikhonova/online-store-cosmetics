import { makeAutoObservable } from "mobx"

export default class productStore{
    constructor() {
        this._types = []

        this._brands = []

        this._products = [
            {id:1, name: 'Nounou шампунь', price: 1600, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для окрашенных волос'},
            {id:2, name: 'Оттеночный шампунь', price: 450, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Уплотняющий шампунь'},
            {id:3, name: 'Реконструкция волос', price: 700, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для окрашенных волос'},
            {id:4, name: 'Востановление волос', price: 550, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для разглаживания завитка'},
            {id:5, name: 'Востановление волос', price: 550, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для разглаживания завитка'},
            {id:6, name: 'Востановление волос', price: 550, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для разглаживания завитка'},
            {id:7, name: 'Востановление волос', price: 550, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для разглаживания завитка'},
            {id:8, name: 'Востановление волос', price: 550, img: 'https://s3.amazonaws.com/teepublicuploadsproduction/users/avatars/000/011/430/original/raptor-avatar-250x250.png?1390249640', info:'Шампунь для разглаживания завитка'},
            
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