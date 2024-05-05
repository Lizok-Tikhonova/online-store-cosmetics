import axios from "axios"


export const getTypes = async () => {
    const {data} = await axios.get('http://localhost:5000/api/type')
    return data
}

export const getBrands = async () => {
    const {data} = await axios.get('http://localhost:5000/api/brand')
    return data
}