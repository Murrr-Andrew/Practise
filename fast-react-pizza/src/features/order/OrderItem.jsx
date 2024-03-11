import { formatCurrency } from "../../utils/helpers";

// eslint-disable-next-line
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  // eslint-disable-next-line
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
