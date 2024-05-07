import { makeAutoObservable } from "mobx"

export default class productStore{
    constructor() {
        this._types = []

        this._brands = []

        this._products = []

        this._selectedType = {}
        this._selectedBrand = {}

        this._basket = []
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

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    setBasket(basket){
        this._basket = basket
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

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get basket(){
        return this._basket
    }

}