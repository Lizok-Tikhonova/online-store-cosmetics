import { makeAutoObservable } from "mobx"

export default class productStore{
    constructor() {
        this._types = []

        this._brands = []

        this._products = []
        this._all_products = []

        this._selectedType = {}
        this._selectedBrand = {}

        this._basket = []
        this._itogSum = []

        this._favourite = []

        this._page = 1
        this._countProduct = 0
        this._limit = 8
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

    setProductAll(all_products){
        this._all_products = all_products
    }


    setSelectedType(type){
        this._selectedType = type
        this.setPage(1)
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
        this.setPage(1)
    }

    setBasket(basket){
        this._basket = basket
    }

    setItogSum(itogSum){
        this._itogSum = itogSum
    }
    
    setFavourite(favourite){
        this._favourite = favourite
    }

    setPage(page){
        this._page = page
    }

    setLimit(limit){
        this._limit = limit
    }

    setCountProduct(countProduct){
        this._countProduct = countProduct
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

    get products_all(){
        return this._all_products
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

    get itogSum(){
        return this._itogSum
    }

    get favourite(){
        return this._favourite
    }

    get page(){
        return this._page
    }

    get limit(){
        return this._limit
    }

    get countProduct(){
        return this._countProduct
    }

}