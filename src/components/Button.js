import PropTypes from 'prop-types';


export const Button = ({ color, text, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.defaultProps = {
  text: PropTypes.string,
  color: PropTypes.string
}