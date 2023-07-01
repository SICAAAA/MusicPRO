import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {products &&
        products.map((product, i) => (
          <div key={i} className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
              <p id="nombre">
                {product.name}
              </p>
              <p className="precio">
              ${product.price}
              </p>
              <hr className={styles.faded}/>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                Comprar
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
