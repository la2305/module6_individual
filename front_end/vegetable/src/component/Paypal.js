import React, { useRef, useEffect, useState } from "react";
import swal from "sweetalert2";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { getUserByJwtToken } from "../service/user/UserService";
import {addOrder} from "../service/order/AddOrder"

export default function Paypal(props) {
  const paypal = useRef();


  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions, err) => {
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
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          
          const res = getUserByJwtToken();
          if (res != null) {
            await addOrder(props.propData2, res.sub);
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