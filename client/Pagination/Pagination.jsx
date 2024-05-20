import React, { useContext } from 'react';
import style from './Pagination.module.css'
import PaginationItem from './PaginationItem/PaginationItem';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index';


const Pagination = observer(() => {
    const {product} = useContext(Context)
    const pagesCount = Math.ceil(product.countProduct / product.limit) //округление в большую сторону
    const pages = []

    for(let i = 0; i < pagesCount; i++){
        pages.push(i + 1)
    }
    console.log(product.countProduct, product.limit, product.page);
    
    return (
        <div className={style.list}>
            {pages.map(page =>
                <PaginationItem key = {page} page={page} active={product.page === page}/>
            )}
            
        </div>
    );
})
 
export default Pagination;