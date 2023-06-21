const url = 'http://localhost:3000/api/productos';

function fetchProducts() {
  fetch('http://localhost:3000/api/productos')
    .then(response => response.json())
    .then(data => {
      const productContainer = document.querySelector('.product-container');
      productContainer.innerHTML = ''; // Limpiar el contenido existente

      data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productCategory = document.createElement('p');
        productCategory.textContent = 'Categoría: ' + product.category;
        productCard.appendChild(productCategory);

        const productPrice = document.createElement('p');
        productPrice.textContent = 'Precio: $' + product.price;
        productCard.appendChild(productPrice);

        const productStock = document.createElement('p');
        productStock.textContent = 'Stock: ' + product.stock;
        productCard.appendChild(productStock);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Agregar al carrito';
        addToCartButton.addEventListener('click', () => {
          // Lógica para agregar el producto al carrito
          console.log('Producto agregado al carrito:', product);
        });
        productCard.appendChild(addToCartButton);

        productContainer.appendChild(productCard);
      });
    })
    .catch(error => console.error('Error al obtener los productos:', error));
}

    
fetchProducts();


//AGREGAR PRODUCTOS
/*
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
});*/