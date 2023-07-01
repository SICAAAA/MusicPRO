import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CommitPay() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const context = state && state.context;

  if (!context) {
    navigate('/'); // Redirige a la página de inicio si no hay contexto válido
    return null;
  }

  const { message_error, response } = context;

  return (
    <div>
      {message_error ? (
        <div>{message_error}</div>
      ) : (
        <div>{response}</div>
      )}
      <h1>Commit pay</h1>
    </div>
  );
}

export default CommitPay;
