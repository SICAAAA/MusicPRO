const axios = require('axios');

function header_request_transbank() {
    var headers = {
      // DEFINICIÓN TIPO AUTORIZACIÓN Y AUTENTICACIÓN
      "Authorization": "Token",
      // LLAVE QUE DEBE SER MODIFICADA PORQUE ES SOLO DEL AMBIENTE DE INTEGRACIÓN
      "Tbk-Api-Key-Id": "597055555532",
      // LLAVE QUE DEBE SER MODIFICADA PORQUE ES SOLO DEL AMBIENTE DE INTEGRACIÓN
      "Tbk-Api-Key-Secret": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
      // DEFINICION DE TIPO DE INFORMACIÓN ENVIADA
      "Content-Type": "application/json"
    };
    console.log(headers);
    return headers;
  }
  const payTransbank = (req,res)=>{
    var data = req.body;
    // LECTURA DE PAYLOAD (BODY) CON INFORMACIÓN DE TIPO JSON
    console.log('data: ', data);
    // DEFINICIÓN DE RUTA API REST TRANSBANK CREAR TRANSACCIÓN
    var url = 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions';
    var headers = header_request_transbank();
    
    axios.post(url, data, { headers: headers })
      .then(function(response) {
        console.log('response: ', response.data);
        res.json(response.data);
      })
      .catch(function(error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  }
  
  module.exports = payTransbank;