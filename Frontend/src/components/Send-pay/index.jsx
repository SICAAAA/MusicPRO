import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SendPay() {
  const location = useLocation();
  const { state } = location;
  const { context } = state;

  useEffect(() => {
    if (context) {
      document.send_pay_form.submit();
    }
  }, [context]);

  if (!context) {
    return null;
  }

  const { transbank } = context;

  return (
    <div> 
      <form action={transbank.url} name="send_pay_form" method="POST">
        <input type="hidden" name="token_ws" value={transbank.token} />
        <input type="hidden" name="amount" value={context.amount} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SendPay;
