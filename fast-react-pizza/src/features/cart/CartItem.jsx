import { formatCurrency } from "../../utils/helpers";

// eslint-disable-next-line
function CartItem({ item }) {
  // eslint-disable-next-line
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
