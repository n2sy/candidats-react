import Cart from "../components/Food/Cart/Cart";
import Header from "../components/Food/Layout/Header";
import Meals from "../components/Food/Meals/Meals";
import { useState } from 'react';
import CartContextProvider from "../store/cart-context";




export default function Food(props) {
    const [showCart, setShowCart] = useState(false);

    function closeHandler() {
        setShowCart(false);
    }

    function openHandler() {
        setShowCart(true);
    }
    return (
        <CartContextProvider>
            {/* {showCart ? <Cart onOpen={openHandler} onClose={closeHandler}></Cart> : <></>} */}
            {showCart && <Cart onOpen={openHandler} onClose={closeHandler}></Cart>}
            <Header onOpen={openHandler}></Header>
            <main>
                <Meals></Meals>
            </main>
        </CartContextProvider>
    )
} 