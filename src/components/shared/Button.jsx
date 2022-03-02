import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = ({
  startIcon,
  endIcon,
  variant,
  color,
  disableShadow,
  disabled,
  size,
  children,
  id,
  type,
  onClick
}) => {
  let cssClasses = `${classes.btn} 
  ${variant === "outline" ? classes.btnOutline : ""} 
  ${variant === "text" ? classes.btnText : ""} 
  ${color === "primary" ? classes.btnPrimary : ""} 
  ${color === "secondary" ? classes.btnSecondary : ""} 
  ${color === "danger" ? classes.btnDanger : ""} 
  ${disableShadow ? classes["no-shadow"] : ""}
  ${startIcon ? classes.startIcon : ''}
  ${endIcon ? classes.endIcon : ''}
  ${size === 'sm' ? classes.btnSm : ''}
  ${size === 'md' ? classes.btnMd : ''}
  ${size === 'lg' ? classes.btnLg : ''}
  `;
  cssClasses = cssClasses.replace(/^\s+|\s+$/gm,'').split('\n').join(' ');

  return (
    <button className={cssClasses} disabled={disabled && true} id={id && id} type={type && type} onClick={onClick && onClick}>
      {startIcon ? startIcon : ""}
      {children}
      {endIcon ? endIcon : ""}
    </button>
  );
};

Button.defaultProps = {
  children: "Default",
};

Button.prototype = {
  children: PropTypes.string,
};

export default Button;
