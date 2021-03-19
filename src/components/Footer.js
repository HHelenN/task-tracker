import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &2021
        <Link to='/about'>About</Link>
      </p>
    </footer>
  )
}