import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
    <nav className="header">
      <div className="topnav">

        <Link to="/">
          <a class="split">sickening hunties</a>
        </Link>

        <Link to="/create">
          <a className="right">create event </a>
        </Link>

        <Link to="#">
          <a className="right">resources </a>
        </Link>

      </div>
    </nav>


    </>
  )
}

export default Header