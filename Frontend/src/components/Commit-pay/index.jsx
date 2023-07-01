import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CommitPay() {
  const location = useLocation();
  const { state } = location;
  const { response } = state;

  const navigate = useNavigate();

  if (!response) {
    navigate('/'); // Redirige a la página de inicio si no hay respuesta válida
    return null;
  }

  return (
    <div>
      <h1>Commit pay</h1>
      <div>{response}</div>
    </div>
  );
}

export default CommitPay;
