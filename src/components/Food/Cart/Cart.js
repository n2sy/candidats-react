

import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
export default function Cart(props) {
    const cartCtx = useContext(CartContext);
    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items ']}>
                {cartCtx.item.map((i) => {
                    return <li key={Math.random().toString()}>{i.label}</li>
                })}

            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount()}</span>

            </div>
            <div className={classes.actions}>
                <button onClick={() => { props.onClose() }} className={classes['button--alt']}>Close</button>
                <button className={classes['buttons']}>Order</button>

            </div>

        </Modal>
    )
}