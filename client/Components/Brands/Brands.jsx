import react, {useContext} from 'react'
import style from "./Brands.module.css"
import { Context } from '../../index'
import { useState } from 'react'
import { observer } from 'mobx-react-lite' 



const Brands = observer(() => {

    // const [select, setSelect] = useState(-1) // id типа

    const {product} = useContext(Context)

    return (
        <ul className={style.brands}>
            {product.brands.map(item=>
                <li key={item.id} className ={(product.selectedBrand === item.id) ? style.li_active : style.li}
                 onClick={()=>(product.selectedBrand !== item.id) ? product.setSelectedBrand(item.id) : product.setSelectedBrand({})}>{item.name}</li>
            )}
        </ul> 
    )
})

export default Brands;