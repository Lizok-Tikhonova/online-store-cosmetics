import React from 'react';
import style from "./Review.module.css"
import { Link } from 'react-router-dom';
import ItemReview from './ItemReview/ItemReview';


const Review = ()=>{
    return(
        <section className={style.review}>
            <h2 className={style.title}>Отзывы</h2>
            <div className={style.wraperLink}>
                <Link to={`/reviews`} className={style.link}>Перейти к отзывам</Link>
            </div>
            <div className={style.reviewWrapper}>
                <ItemReview name={'Роман Лебедев'} text={'"Мастер, к которому я обратился, имел большой опыт и профессионализм. Он выслушал мои пожелания и предложил несколько вариантов стрижек. В процессе работы мастер постоянно интересовался моим мнением и давал полезные советы."'}/>
                <ItemReview name={'Ольга Заричная'} text={'"Отличное место и превосходный мастер! Индивидуальный подход к каждому. Однозначно всем рекомендую этого мастера и сама не раз еще сюда приду!"'}/>
                <ItemReview name={'Ольга Косторная'} text={'"Недавно посетил салон-парикмахерскую “Стиль” и хочу поделиться своим впечатлением. Первое, что меня поразило - это уютная атмосфера салона. Интерьер выполнен в современном стиле, а светлые тона создают ощущение простора и комфорта."'}/>
            </div>
        </section>
    )
}

export default Review