




export default function Item(props) {
    // console.log(props.candidat);
    return (
        <li onClick={() => { props.onSelectedCand(props.candidat) }} className="list-group-item">
            <img style={{ width: '50px', height: '50px', margin: '0 10px' }} src={require(`../assets/${props.candidat.avatar}`)}></img>
            {props.candidat.prenom} {props.candidat.nom}
        </li >
    )
}