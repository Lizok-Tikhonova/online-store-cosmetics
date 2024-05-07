import react, {useContext} from 'react'
import style from "./Types.module.css"
import { Context } from '../../index'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'



const Types = observer(() => {

    // const [select, setSelect] = useState(-1) // id типа

    const {product} = useContext(Context)

    return (
        <ul className={style.types}>
            {product.types.map(item=>
                <li key={item.id} className ={(product.selectedType === item.id) ? style.li_active : style.li} 
                    onClick={()=>(product.selectedType !== item.id) ? product.setSelectedType(item.id) : product.setSelectedType({})}>{item.name}</li>
            )}
        </ul> 
    )
})

export default Types;