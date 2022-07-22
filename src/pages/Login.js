import { useContext, useReducer, useState } from "react"
import { LoginContext } from '../store/LoginContext';
import { useNavigate } from 'react-router-dom';

const emailReducer = (state, action) => {
    return {
        value: '',
        isValid: false
    } //new state 
}

export default function Login(props) {

    const [loginValue, setLoginValue] = useState('');
    const [pwdValue, setPwdValue] = useState('');
    const [validForm, setValidForm] = useState(true)
    const [hd, setHd] = useState(true);
    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();
    const [registerValue, setRegisterValue] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false
    });


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
        console.log(registerValue);

        if (!registerValue) {
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
        else {
            LogCtx.inscrire(user)
                .then(res => {
                    return res.json()
                }).then((data) => {
                    console.log(data);
                    console.log("Utilisateur inscrit");
                    setRegisterValue(false);
                    navigate('/login');
                    setLoginValue('');
                    setPwdValue('');

                }).catch(err => {
                    console.log("erreuuuuuuur");
                    setLoginValue('');
                    setPwdValue('');
                })
        }




    }

    return (
        <section>
            <h1>{registerValue ? 'Sign-up Form' : 'Sign-in Form'}</h1>
            <br></br>
            <form onSubmit={submitHandler}>
                <div hidden={hd} className="alert alert-danger">Login et/ou Mot de passe invalide</div>
                <label htmlFor='title'>E-mail address </label>
                <input className="form-control" type="email" id="tile" value={loginValue} onChange={loginHandler}></input>


                <label>Password </label>
                <input className="form-control" type="text" value={pwdValue} onChange={pwdHandler}></input>
                <br></br>
                <center>
                    <button disabled={validForm} className="btn btn-primary" type="submit">{registerValue ? 'Register' : 'Login'}</button>
                    <button type="button" onClick={() => setRegisterValue((prev) => !prev)} className="btn btn-success" style={{ margin: '0 10px' }}>{registerValue ? 'Swith To Login' : 'Swith To Register'}</button>
                </center>

            </form>
        </section>

    )
}