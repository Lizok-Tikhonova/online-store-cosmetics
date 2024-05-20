import React, { useContext } from 'react';
import style from './PaginationItem.module.css'
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite'

const PaginationItem = observer(({page, active}) => {
    const {product} = useContext(Context) 
    return (
        <div className={active?style.activeItem:style.item} onClick={() => product.setPage(page)}>
            {page}
        </div>
    );
})
 
export default PaginationItem;