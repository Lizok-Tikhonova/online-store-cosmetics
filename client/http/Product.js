import axios from "axios"  


export const getTypes = async () => {
    const {data} = await axios.get('http://localhost:5000/api/type')
    return data
}

export const getBrands = async () => {
    const {data} = await axios.get('http://localhost:5000/api/brand')
    return data
}

export const addBrands = async (brand) => {
    const {data} = await axios.post('http://localhost:5000/api/brand', brand)
    return data
}

export const addTypes = async (type) => {
    const {data} = await axios.post('http://localhost:5000/api/type', type)
    return data
}

export const getPopul = async () => {
    const {data} = await axios.get('http://localhost:5000/api/product/popular')
    return data
}

export const getNewProducts = async () => {
    const {data} = await axios.get('http://localhost:5000/api/product/new')
    return data
}

export const getAllProductsSearch = async (brandId, typeId) => {
    const {data} = await axios.get('http://localhost:5000/api/product/all', {params:{
        brandId, typeId
    }})
    return data
}

export const getProducts = async (brandId, typeId, page, limit=5) => {
    const {data} = await axios.get('http://localhost:5000/api/product', {params:{
        brandId, typeId, page, limit
    }})
    return data 
}

export const getOneProduct = async (id) => {
    const {data} = await axios.get('http://localhost:5000/api/product/' + id)
    return data
}

export const updateProduct = async (id, price) => {
    const {data} = await axios.put('http://localhost:5000/api/product/' + id, {price})
    return data
}

export const addProduct = async (product) => {
    const {data} = await axios.post('http://localhost:5000/api/product', product)
    return data
}

export const getBasket = async (userId) => {
    const {data} = await axios.get('http://localhost:5000/api/basket/' + userId)  
    return data
}

export const getFavourite = async (userId) => {
    const {data} = await axios.get('http://localhost:5000/api/favourite/' + userId)  
    return data
}
 
export const getOrders = async (userId) => {
    const {data} = await axios.get('http://localhost:5000/api/order/' + userId)  
    return data
}

export const getOrdersList = async (orderId) => {
    const {data} = await axios.get('http://localhost:5000/api/order/list/' + orderId)  
    return data
}
