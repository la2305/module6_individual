import React, { useState } from "react";
import swal from "sweetalert2";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { getUserByJwtToken } from "../service/user/UserService";
import { addOrders } from "../service/order/AddOrder";


export default function Paypal(props) {
  const [carts, setCarts] = useState({});

  return (
    <div>
      <PayPalButtons
        createOrder={( actions) => {
          const price = parseFloat(props.propData1);
          const priceUsd = parseInt(price / 23000);
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: priceUsd,
                },
              },
            ],
          });
        }}
        onApprove={async ( actions) => {
          const order = await actions.order.capture();
          setCarts({
            cartDetailDtoList: props.propData2
          });
          const res = getUserByJwtToken();
          console.log(carts);
          if (res != null) {
            await addOrders({
              cartDetailDtoList: props.propData2
            }, res.sub);
          }
          swal.fire("Mua hàng thành công !");   
          window.location.reload()
        }
        }
        onError={(err) => {
          console.log(err);
          swal.fire("Thanh toán không thành công!", "", "error");
        }}
      />
    </div>
  );
}