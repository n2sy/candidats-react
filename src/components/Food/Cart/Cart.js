

import classes from './Cart.module.css'
import Modal from '../UI/Modal';
export default function Cart() {
    return (
        <Modal>
            <ul className={classes['cart-items ']}>
                <li>
                    Sushis
                </li>

            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>33.44</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes['buttons']}>Order</button>

            </div>

        </Modal>
    )
}