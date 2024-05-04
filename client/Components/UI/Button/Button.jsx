import style from "./Button.module.css"
import classnames from 'classnames';


const Button = ({mix, children}) => {
    return ( 
        <button className={classnames(style.btn, mix)}>
            {children}
        </button>
    );
}
 
export default Button;