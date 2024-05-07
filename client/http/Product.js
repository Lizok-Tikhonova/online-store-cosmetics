import axios from "axios"


export const getTypes = async () => {
    const {data} = await axios.get('http://localhost:5000/api/type')
    return data
}

export const getBrands = async () => {
    const {data} = await axios.get('http://localhost:5000/api/brand')
    return data
}

export const getProducts = async (typeId, brandId) => {
    const {data} = await axios.get('http://localhost:5000/api/product', {params:{
        typeId, brandId
    }})
    return data
}

export const getOneProduct = async (id) => {
    const {data} = await axios.get('http://localhost:5000/api/product/' + id)
    return data
}


export const getBasket = async (basketId) => {
    const {data} = await axios.get('http://localhost:5000/api/basket/' + basketId)  
    return data
}
 