
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
            let cmd = prev.find((c) => c.id == newC.id);
            let id = prev.indexOf(cmd);
            if (id != -1) {
                prev[id].qte += newC.qte;
                prev[id].amount += newC.amount;
                return prev;
            }
            else
                return [...prev, newC];
        })

    }
    function supprimerItem(id) {
        setChoice((prev) => {
            prev.filter((i) => i.id != id)
        })
    }

    function total() {
        console.log(choice);
        const cmd = choice.map((i) => { return (i.amount) });
        console.log(cmd);
        const amount = cmd.reduce((prevVal, nextVal) => prevVal + nextVal, 0);
        console.log(amount);
        return amount
    }

    const context = {
        item: choice,
        totalAmount: total,
        addItem: ajouterItem,
        removeItem: supprimerItem
    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
} 