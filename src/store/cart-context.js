
import { createContext } from 'react';
import { useState } from 'react';


export const CartContext = createContext(
    {
        item: [],
        totalAmount: 0,
        addItem: () => { },
        removeItem: () => { }

    }
);

export default function CartContextProvider(props) {
    const [choice, setChoice] = useState([]);

    function ajouterItem(newC) {
        setChoice((prev) => {
            return [...prev, newC]
        })

    }
    function supprimerItem(id) {
        setChoice((prev) => {
            prev.filter((i) => i.id != id)
        })
    }

    function total() {
        const amount = choice.reduce((prevVal, nextVal) => prevVal + nextVal, 0)
        return amount
    }

    const context = {
        item: choice,
        totalAmount: total,
        addItem: ajouterItem,
        removeItem: supprimerItem
    }

    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
} 