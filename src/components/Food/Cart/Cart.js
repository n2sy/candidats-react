

import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import CartItem from './CartItem';
export default function Cart(props) {
    const cartCtx = useContext(CartContext);
    function addHandler(item) {
        console.log("add");
        cartCtx.addItem(item, 1);

    }
    function removeHandler(id) {
        console.log("delete");
        cartCtx.removeItem(id);
    }

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items ']}>
                {cartCtx.item.map((i) => {
                    return <CartItem key={Math.random().toString()} item={i} onAdd={() => { addHandler(i) }} onRemove={removeHandler.bind(null, i.id)}></CartItem>
                })}

            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount().toFixed(2)}</span>

            </div>
            <div className={classes.actions}>
                <button onClick={() => { props.onClose() }} className={classes['button--alt']}>Close</button>
                <button className={classes['buttons']}>Order</button>

            </div>

        </Modal>
    )
}