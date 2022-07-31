

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useContext } from 'react';
import { CartContext } from '../../../../store/cart-context';
import { useState } from 'react';


export default function MealItemForm(props) {
    const cartCtx = useContext(CartContext);
    const [inpValue, setInpValue] = useState();

    function inputHandler(event) {
        //console.log(event);
        setInpValue(event.target.value);
    }

    function addToCart(event) {
        event.preventDefault();
        let priceGeneral = props.meal.price * Number(inpValue);
        const newCommande = {
            id: props.meal.id,
            label: props.meal.name,
            qte: Number(inpValue),
            amount: priceGeneral
        };
        console.log(newCommande);
        cartCtx.addItem(newCommande);
    }
    return (
        <form className={classes.form} onSubmit={addToCart}>
            <Input label="Amount" infos={
                { id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '0' }
            } onChange={inputHandler}></Input>
            <button type="submit">+ Add</button>

        </form>
    )
}