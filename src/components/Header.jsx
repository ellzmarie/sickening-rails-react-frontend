import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
    <nav className="header">
      <Link to="/">
      <div className="app-title"><p className="app-name">Sickening Hunties</p></div>
      </Link>
    </nav>

    <div className="topnav">
      <Link to="#">home</Link>

    </div>
    </>
  )
}

export default Header