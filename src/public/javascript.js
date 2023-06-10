const url = 'http://localhost:3000/api/productos';

//LISTAR ELEMENTOS
fetch(url)
  .then(response => response.json())
  .then(data => {
    // La respuesta de la API está en `data`
    // Recorre los productos y crea las filas dinámicamente
    const tbody = document.querySelector('#productos-table tbody');

    data.forEach(producto => {
      const row = document.createElement('tr');
      const nombreProd = document.createElement('td');
      const categoriaProd = document.createElement('td');
      const precioProd = document.createElement('td');
      const stockProd = document.createElement('td');

      nombreProd.textContent = producto.name;
      categoriaProd.textContent = producto.categoria;
      precioProd.textContent = producto.price;
      stockProd.textContent = producto.stock;

      row.appendChild(nombreProd);
      row.appendChild(categoriaProd);
      row.appendChild(precioProd);
      row.appendChild(stockProd);

      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error al obtener los productos:', error);
  });


//AGREGAR PRODUCTOS
const form = document.querySelector('#product-form');

form.addEventListener('submit', event => {
  event.preventDefault(); 

  const name = document.querySelector('#name').value;
  const categoria = document.querySelector('#categoria').value;
  const price = document.querySelector('#price').value;
  const stock = document.querySelector('#stock').value;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name,categoria,price,stock })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Producto agregado:', data);
      form.reset(); 
    })
    .catch(error => {
      console.error('Error al agregar el producto:', error);
    });
});