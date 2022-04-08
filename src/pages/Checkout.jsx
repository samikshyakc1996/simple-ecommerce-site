import { useContext } from "react";
import CartContext from "../CartContext";
import { v4 as uuid } from "uuid";
function checkout() {
  const { items } = useContext(CartContext);
  return (
    <>
      <h1 className="title">Checkout page</h1>
      <div className="shopping-bag">
        {items.map((item) => (
          <div key={uuid()} className="checkout-content">
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default checkout;
