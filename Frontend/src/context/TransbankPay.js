import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "../components/Cart/styles.module.scss";

function TransbankPay({ total }) {
  const [buyOrder] = useState('12345678');
  const [amount] = useState(total);
  const [redirectToSendPay, setRedirectToSendPay] = useState(false);
  const [context, setContext] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    const session_id = 'sesion1234557545';
    const return_url = 'http://localhost:3001/';
    
    const body = {
      buy_order: 'ordenCompra' + buyOrder,
      amount: amount,
      session_id: session_id,
      return_url: return_url
    };

    const url = 'http://localhost:3000/transbank';
    axios
      .post(url, body)
      .then(function (response) {
        console.log('response:', response.data);
        const contextData = {
          transbank: response.data,
          amount: amount
        };
        vaciarCarrito();
        setContext(contextData);
        setRedirectToSendPay(true);
      })
      .catch(function (error) {
        console.error('error TransbankPay', error);
      });
  };

  const vaciarCarrito = () => {
    axios
      .delete("http://localhost:3000/products-cart")
      .then(function (response) {
        console.log('Carrito vaciado');
      })
      .catch(function (error) {
        console.error('error vaciar carrito', error);
      });
  };

  useEffect(() => {
    if (redirectToSendPay) {
      navigate('/send-pay', { state: { context: context } })
    }
  }, [redirectToSendPay, navigate, context]);

  return (
    <div id="pagar">
      <form onSubmit={handleFormSubmit}>
        <button type="submit" className={styles.pagar}>Pagar</button>
      </form>
    </div>
  );
}

export default TransbankPay;
