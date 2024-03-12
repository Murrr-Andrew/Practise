// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate
} from "../../utils/helpers";

import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const order = useLoaderData();

  const {
    // eslint-disable-next-line
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // eslint-disable-next-line
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);

  console.log(order);

  return order;
}

export default Order;
