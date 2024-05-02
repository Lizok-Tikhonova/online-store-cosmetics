import { NavLink } from 'react-router-dom';
import style from './Master.module.css'
import vector from './Vector.svg'

const Master = ({name, img, id, statusWork}) => {

    return ( 
        <NavLink to={`/masters/${id}`}>
            <div className={style.master}>
                <div className={style.img}>
                    <img src={img} alt="photo"/>
                </div>
                <div className={style.workName}>
                    <div className={style.nameLink}>
                        <p className={style.name}>{name}</p>
                        <img src={vector} alt="line" className={style.triangel} />
                    </div>
                    <span className={style.statusWork}>{statusWork}</span>
                </div>
            </div>
        </NavLink>
    );
}
 
export default Master;
