


import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = () => { return <div className={classes.backdrop}></div> }
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
            {ReactDOM.createPortal(<Backdrop />, cible)}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, cible)}
        </>
    )
}