import { useParams } from "react-router-dom";
import { arrmasters } from "../../helpers/Masters";
import styles from "./Master.module.css"

const Master = () => {
    const idMaster = useParams();
    const master = arrmasters[idMaster.id];
    const works = master.portfolio

    return ( 
    <main>
        <div className="container">
            <section className={styles.master}>
                <div className={styles.infoMaser}>
                    <div className={styles.infoMaser__title}>
                        <h1 className={styles.name}>{master.name}</h1>
                        <p className={styles.role}>{master.role}</p>
                    </div>
                    <div className={styles.descMaster}>
                        <p className={styles.desc}>
                            {master.desc}
                        </p>
                        <div className={styles.imgMaster}>
                            <img src={master.img} alt="photo" className={styles.img}/>
                            <p className={styles.imgMaster__name}>{master.name}</p>
                            <p className={styles.imgMaster__role}>{master.role}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.portfolio}>
                    <h1 className={styles.titleWork}>Работы</h1>
                    <div className={styles.worksMaster}>
                            {works.map((work, index)=>
                                <div className={styles.wrapperImg}>
                                    <img src={work} alt="work" key={index} className={styles.work}/>
                                </div>
                            )}
                    </div>
                </div>
            </section>
        </div>
    </main>
    );
}
 
export default Master;