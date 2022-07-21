import Item from "./Item"


export default function Liste(props) {
    return (
        <ol>
            {props.listCandidat.map((cand) => {
                return <Item key={cand._id} candidat={cand} onSelectedCand={props.onSelectedCand}></Item>
            })}
        </ol>
    )
}