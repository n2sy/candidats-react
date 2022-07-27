

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useContext } from 'react';
import { CartContext } from '../../../../store/cart-context';


export default function MealItemForm() {
    const cartCtx = useContext(CartContext);

    function addToCart() {

    }
    return (
        <form className={classes.form}>
            <Input label="Amount" infos={
                { id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '0' }
            }></Input>
            <button onClick={addToCart}>+ Add</button>

        </form>
    )
}