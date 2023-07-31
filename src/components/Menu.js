import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import CartContext from "./ContextAPI/cart-context";

const Menu = () => {
  const context = useContext(CartContext);

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

  const addedToCartHandler = (id, name, price, quantity) => {
    let data = {
      id,
      name, 
      price, 
      quantity
  }
    context.addItemsToCartHandler(data);
  };
  return (
    <div bg="dark" data-bs-theme="dark">
      <h4 style={{ textAlign: "center" }}>Food Items In The Menu Are...</h4>
      <ListGroup as="ol" numbered>
        {menuItems.map((i) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={i.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold" style={{ color: "white" }}>
                {i.name}
              </div>
              <i>{i.desc}</i>
              <br />
              <b>Rs.{i.price}</b>
            </div>
            <Button
              variant="outline-warning"
              onClick={() =>
                addedToCartHandler(i.id, i.name, i.price, i.quantity)
              }
            >
              +Add
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Menu;
