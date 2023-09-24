import PropTypes from "prop-types";
import styles from "./Button.module.css"
const Button = ({ size, onClick, children }) => {
  const buttonClass =
    size === "circular"
      ? styles["circular-button"]
      : size === "square"
      ? styles["square-button"]
      : "";
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["circular", "square"]).isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
