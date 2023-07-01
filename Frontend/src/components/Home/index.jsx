import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import styles from './styles.module.scss'
import CommitPay from "../Commit-pay";

const Home = () => {
  return (
    <div className={styles.home}>
      <div class="header">
        <hr className={styles.line}/>
      <h1 className={styles.letra}>MusicPRO</h1>
      <hr className={styles.line}/>
      <p className={styles.parrafo}>Bienvenido a la tienda virtual donde encontrarás distintos instrumentos de la mejor calidad, al mejor precio</p>
    </div>
      <Cart />
      <Products />
    </div>
  );
};

export default Home;
