import { useContext, useState } from "react"
import { LoginContext } from '../store/LoginContext';
import { useNavigate } from 'react-router-dom';



export default function Login(props) {

    const [loginValue, setLoginValue] = useState('');
    const [pwdValue, setPwdValue] = useState('');
    const [validForm, setValidForm] = useState(true)
    const [hd, setHd] = useState(true);
    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();



    function loginHandler(event) {
        setLoginValue(event.target.value);
    }

    function pwdHandler(event) {
        setPwdValue(event.target.value);
        if (event.target.value.length > 5) {

            setValidForm(false);
        }

    }

    function submitHandler(event) {
        event.preventDefault();
        const user = {
            email: loginValue,
            password: pwdValue
        }

        LogCtx.seConnecter(user)
            .then(res => {
                return res.json()
            }).then((data) => {
                localStorage.setItem('token', data['token']);
                console.log("Utilisateur Authentifié");
                navigate('/cv');

            }).catch(err => {
                //console.log("erreuuuuuuur");
                setHd(false);
                setLoginValue('');
                setPwdValue('');
            })


    }

    return (
        <form onSubmit={submitHandler}>
            <div hidden={hd} className="alert alert-danger">Login et/ou Mot de passe invalide</div>
            <label htmlFor='title'>E-mail address </label>
            <input className="form-control" type="email" id="tile" value={loginValue} onChange={loginHandler}></input>


            <label>Password </label>
            <input className="form-control" type="text" value={pwdValue} onChange={pwdHandler}></input>
            <br></br>
            <center>
                <button disabled={validForm} className="btn btn-primary" type="submit">Se connecter</button>
                <button disabled={validForm} className="btn btn-success" type="submit">Swith To Register</button>
            </center>

        </form>
    )
}