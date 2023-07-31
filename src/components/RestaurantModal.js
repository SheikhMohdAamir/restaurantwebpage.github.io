import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import CartContext from "./ContextAPI/cart-context";

const RestaurantModal = (props) => {
  const menuItems = [
    {
      id: "1",
      name: "Hamburger",
      desc: "patty of ground meat, typically beef",
      price: "100",
      quantity: "1",
    },
    {
      id: "2",
      name: "Buffalo wings",
      desc: "cayenne pepper and hot sauce",
      price: "400",
      quantity: "1",
    },
    {
      id: "3",
      name: "Apple pie",
      desc: "whipped cream, ice cream & custard",
      price: "300",
      quantity: "1",
    },
    {
      id: "4",
      name: "Biryani",
      desc: " Indian spices, vegetables, rice & meat",
      price: "250",
      quantity: "1",
    },
  ];

  const context = useContext(CartContext);

  const increaseCartItem = (id, name, price, quantity) => {
    const data = {
      id,
      name,
      price,
      quantity
    }
    menuItems.map(i => {
      if(i.id===data.id){
        data.price= i.price
      }
      return(1)
    })
    context.addItemsToCartHandler(data)
  }

  const decreaseCartItem = (id, name, price, quantity) => {
    const data = {
      id,
      name,
      price,
      quantity
    }
    menuItems.map(i => {
      if(i.id===data.id){
        data.price= i.price
      }
      return(1)
    })
    context.removeItemsFromCartHandler(data)
  }

  const resetCart = () => {
    if(context.items.length>0){context.resetCart()
    props.onHide()
    setTimeout(()=> alert('Congratulations! Your Order Is Confirmed'),1000)}
    else{
      alert('Add Any Item First')
    }
  }

  let cartTotal = context.items.reduce((initial, everyElement) => {
        return initial + Number(everyElement.price)
  },0)

  return (
    <div>
      {ReactDOM.createPortal(
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{backgroundColor:'#ffd700'}}>
            <Modal.Title id="contained-modal-title-vcenter">
              Items In Your Cart Are...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#111b20" }}>
            <ListGroup as="ol" numbered bg="dark" data-bs-theme="dark">
              {context.items.length>0 ?context.items.map((i) => (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  key={i.id}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{i.name}</div>
                    <b>Rs.{i.price}</b>
                  </div>
                  <Badge bg="warning" text="dark">
                    <Button variant="warning" size='sm'onClick={() => decreaseCartItem(i.id, i.name, i.price, i.quantity)}>-</Button>x{i.quantity}
                    <Button variant="warning" size='sm' onClick={() => increaseCartItem(i.id, i.name, i.price, i.quantity)}>+</Button>
                  </Badge>
                </ListGroup.Item>
              )) : <h5 style={{color:'white'}}>Cart Is Empty!</h5>}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:'#ffd700'}}>
            {context.items.length>0 && <h4 style={{textAlign:'left'}}>Total - Rs.{cartTotal}</h4>}
            <Button variant="dark" onClick = {resetCart}>Order</Button>
            <Button variant="dark" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default RestaurantModal;
