
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>Food-App</h1>
                {/* <button>Cart</button> */}
                <HeaderCartButton onOpen={props.onOpen}></HeaderCartButton>
            </header>
            <div className={classes.main_image}>
                <img src={require('../../../assets/meals.jpg')}></img>
            </div>
        </>
    )
}