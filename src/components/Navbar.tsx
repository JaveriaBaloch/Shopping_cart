import {Navbar, Container, NavbarBrand, Nav, NavItem, Button, Badge} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "../css/app.css"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { ShoppingCart } from "./shoppingCart"
const NavBar = () =>{
    const { openCart, cartQuantity } = useShoppingCart()
    return(
        <Navbar className="bg-white shadow-lg mb-3">
            <Container>
                <NavbarBrand>
                    <Nav.Link to="/"  as={NavLink}>Vite</Nav.Link>
                </NavbarBrand>
                <Nav>
                        <Nav.Link to="/Store" className="me-2" as={NavLink}>
                            Store
                        </Nav.Link>
                 
                        <Nav.Link to="/About"  className="ml-2"  as={NavLink}>
                            About
                        </Nav.Link>
                </Nav>
            </Container>
            {cartQuantity>0&&
            <Button className="me-5 btn-light btn-outline-light border rounded-circle p-3 cart-btn"
            onClick={openCart}>
             <FontAwesomeIcon icon={faCartShopping}  size="lg" color="#3379CC" />
             <Badge className="bg-danger badge">{cartQuantity}</Badge>
         </Button>}
        </Navbar>
    )
}
export default NavBar