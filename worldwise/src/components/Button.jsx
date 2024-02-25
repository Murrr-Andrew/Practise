import PropTypes from "prop-types";

import styles from "./Button.module.css";

// eslint-disable-next-line
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default Button;
