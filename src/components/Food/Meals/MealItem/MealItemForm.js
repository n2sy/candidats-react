

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


export default function MealItemForm() {
    return (
        <form className={classes.form}>
            <Input label="Amount" infos={
                { id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '0' }
            }></Input>
            <button>+ Add</button>

        </form>
    )
}