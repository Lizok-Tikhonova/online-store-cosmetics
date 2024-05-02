import React from "react";
import style from './Reviews.module.css'
import Review from "./Review/Review";

import { arrReviews } from "../../helpers/Reviews";


const Reviews = () => {
    return(
        <main>
            <div className="container">
                <section className={style.reviews}>
                    <h1 className={style.title}>
                        Отзывы
                    </h1>
                    <div className={style.wrapperReviews}>
                        {arrReviews.map((review, index)=>
                            <Review name={review.name} text={review.text} key={index}/>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Reviews;