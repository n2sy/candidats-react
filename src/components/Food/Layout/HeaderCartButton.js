
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { forwardRef, useContext } from 'react';
import { CartContext } from '../../../store/cart-context';

export default function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);

    const nbItemsCart = cartCtx.item.reduce((prevVal, nextValue) => {
        return prevVal + nextValue.amount;
    }, 0)
    return (
        <button onClick={() => props.onOpen()} className={classes.button}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span >Your Cart</span>
            <span className={classes.badge}>{nbItemsCart.toFixed(2)}</span>


        </button>
    )
}