


import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = (props) => { return <div onClick={() => props.onClose()} className={classes.backdrop}></div> }
const ModalOverlays = props => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}
export default function Modal(props) {
    const cible = document.getElementById('overlays');
    return (
        <>
            {/* <Backdrop></Backdrop>
            <ModalOverlays>{props.children}</ModalOverlays> */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, cible)}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, cible)}
        </>
    )
}