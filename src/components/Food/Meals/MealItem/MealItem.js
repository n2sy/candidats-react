
import classes from './MealItem.module.css';

export default function MealItem(props) {
    return (
        <li className={classes.meal}>
            <div><h3>{props.meal.name}</h3></div>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{`${props.meal.price.toFixed(2)}$`}</div>

        </li>
    )
}