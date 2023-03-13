import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
    <nav className="header">
      <Link to="/">
      <div className="app-title"><p className="app-name">s i c k e n i n g h u n t i e s .</p></div>
      </Link>
    </nav>

    {/* <div className="topnav">
      <Link to="#">home</Link>

    </div> */}
    </>
  )
}

export default Header