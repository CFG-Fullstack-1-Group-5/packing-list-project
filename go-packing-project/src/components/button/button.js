import "./button.css";

const Button = ({ type = 'button', onClick, children }) => {
    return (
      <button type={type} onClick={onClick}>
        Create my List
      </button>
    );
  };
  
  export default Button; 