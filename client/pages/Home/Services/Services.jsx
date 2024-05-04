import style from "./Services.module.css"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"


const Servic = ({name, img})=>{
    return(
        <div className={style.servic}>
            <img src={img} alt="variant_services" className={style.img} />
            <p className={style.name}>{name}</p>
        </div>
    )
}

const Servises = () => {
    return ( 
        <div className={style.services}>
            <Servic name={"Классическое окрашивание в натуральные тона"} img={img1}/>
            <Servic name={"Яркое окрашивание"} img={img2}/>
            <Servic name={"Окрашивание в один тон"} img={img3}/>
            <Servic name={"Укладки"} img={img4}/>
            <Servic name={"Стрижки"} img={img5}/>
            <Servic name={"Кератин"} img={img6}/>
        </div>
     );
}
 
export default Servises;