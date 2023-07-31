import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import RestaurantModal from "./RestaurantModal";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "./ContextAPI/cart-context";

const RestaurantNavbar = () => {
  const [modalShow, setModalShow] = useState(false)

  const context = useContext(CartContext)

  let cartQuantity = context.items.reduce((initial, everyElement)=>{
      return(initial+Number(everyElement.quantity))
  },0)
  

  return (
    <>
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <h3 href="#home" style={{color:'white'}}>
            🍔React Meals
          </h3>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="warning" size="sm" onClick={() => setModalShow(true)}>
                Your Cart <Badge bg="dark">{cartQuantity}</Badge>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RestaurantModal show={modalShow} onHide={() => setModalShow(false)}/>
      </>
  );
};

export default RestaurantNavbar;
