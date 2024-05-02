import Button from "../UI/Button/Button";
import styles from "./Footer.module.css";
import vk from "./icons8-vk (1).svg"

const Footer = () => {
	return (
		<footer>
			<div className="container">
			<hr className={styles.hr}></hr>
				<div className={styles.footerContent}>
					<div className={styles.logoSignUp}>
						<a href="!#" className={styles.logo}>
							Haircuts<span>&</span>Coloristics
						</a>
						{/* <Button className={styles.btn}>записаться</Button> */}
					</div>
					<div className={styles.item}>
						<h2 className={styles.title}>Контакты</h2>
						<div className={styles.descList}>
							<p className={styles.desc}>+7(920)-123-45-67</p>
							<p className={styles.desc}>+7(920)-123-30-49</p>
							<p className={styles.desc}>Георгиевская улица д. 39, офис 309</p>
						</div>
					</div>
					<div className={styles.item}>
						<h2 className={styles.title}>Режим работы</h2>
						<div className={styles.descList}>
							<p className={styles.desc}>С 10:00 до 21:00 (Пн-Пт)</p>
							<p className={styles.desc}>С 11:00 до 20:00 (Сб-Вс)</p>
						</div>
					</div>
					<div className={styles.item}>
						<h2 className={styles.title}>Я в VK</h2>
						<img src={vk} alt="vk" className={styles.vk} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
