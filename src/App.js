import RestaurantNavbar from "./components/RestaurantNavbar";
import Description from "./components/Description";
import Menu from "./components/Menu";
import CartProvider from "./components/ContextAPI/CartProvider";

function App() {
  return (
    <div className="container-100x" style={{backgroundColor:'#ffd700'}}>
      <CartProvider>
        <RestaurantNavbar />
        <Description />
        <Menu />
      </CartProvider>
    </div>
  );
}

export default App;
