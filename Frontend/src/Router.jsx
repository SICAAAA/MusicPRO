import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { CartProvider } from './context/CartContext';
import CommitPay from './components/Commit-pay';
import SendPay from './components/Send-pay';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<div className="App">
                                    <CartProvider>
                                        <Home />
                                    </CartProvider>
                                </div>} />
            <Route path="/send-pay" element={<SendPay />} /> 
            <Route path="/commit-pay" element={ <CommitPay />} />
            { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;