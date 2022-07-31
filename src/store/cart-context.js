
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

    function ajouterItem(newC, q = 0) {
        setChoice((prev) => {
            let id = prev.findIndex((c) => c.id == newC.id);

            if (id != -1) {
                // const q = prev[id].qte + newC.qte;
                // const a = prev[id].amount += newC.amount;
                // const n = {
                //     id: id,
                //     label: prev[id].label,
                //     qte: q,
                //     amount: a
                // }
                // prev.splice(id, 1);
                // return [...prev, n];
                if (!q) {
                    newC.qte += prev[id].qte;
                    newC.amount += prev[id].amount;
                }
                else {
                    newC.qte += q;
                    newC.amount += (newC.amount / newC.qte);
                }


                const t = prev.filter((c) => c.id !== newC.id);

                return [...t, newC];
            }
            else
                return [...prev, newC];
        })

    }
    function supprimerItem(i) {
        setChoice((prev) => {
            let id = prev.findIndex((c) => c.id == i);
            let prixunique = prev[id].amount / prev[id].qte;
            console.log("prix unique", prixunique);
            prev[id].qte--;
            prev[id].amount -= prixunique;
            if (!prev[id].qte)
                prev.filter((i) => i.id != id);
            else {
                return [...prev];
            }
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