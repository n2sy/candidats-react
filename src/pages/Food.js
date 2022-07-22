import Cart from "../components/Food/Cart/Cart";
import Header from "../components/Food/Layout/Header";
import Meals from "../components/Food/Meals/Meals";




export default function Food(props) {
    return (
        <>
            <Cart></Cart>
            <Header></Header>
            <main>
                <Meals></Meals>
            </main>
        </>
    )
} 