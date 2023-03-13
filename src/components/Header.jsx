import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="header">
      <Link to="/">
        <div>Sickening Hunties App</div>
      </Link>
    </nav>
  )
}

export default Header