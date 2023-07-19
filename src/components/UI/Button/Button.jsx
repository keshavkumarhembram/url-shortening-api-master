import PropTypes  from 'prop-types';
import classes from './Button.module.css';


const  Button =  ({className, children}) => {
    const classlist =  className + ' ' + classes.button;
    return(
        <button className={classlist}>{children}</button>
    );
}


Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
}


export default Button;