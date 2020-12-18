import { Card, Nav } from "react-bootstrap";
import SearchInput from "./SearchInput";
import { Link, Route } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";

function Header() {
  return (
    <Card.Header>
      <Nav defaultActiveKey="#homepage">
        <Nav.Item>
          <Nav.Link as="div">
            <Link to="/">
              Homepage
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as="div">
            <Link to="/my/tips">
              My Tips
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <SearchInput/>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Nav.Link as="div">
            {localStorage.getItem("auth-token")
              ? <Link to="/signout" onClick={(e) => localStorage.removeItem(AUTH_TOKEN)}>Sign Out</Link>
              : <Link to="/signin">Sign In</Link>
            }
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  )
}

export default Header;
