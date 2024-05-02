import style from "./Cosmetics.module.css"
import kevinMurphy from './cosm1.png'
import oribe from './cosm2.png'
import alterna from './cosm3.png'
import aldoCoppola from './cosm4.png'

const Cosmetics = () => {
    return ( 
        <div className={style.cosmetics}>
            <img src={kevinMurphy} alt="kevinMurphy" className={style.item} />
            <img src={oribe} alt="oribe" className={style.item} />
            <img src={alterna} alt="alterna" className={style.item} />
            <img src={aldoCoppola} alt="aldoCoppola" className={style.item} />
        </div>
     );
}
 
export default Cosmetics;