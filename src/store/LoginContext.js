
import { createContext } from 'react';
import { useState } from 'react';



export const LoginContext = createContext(
    {
        seConnecter: () => { },
        estConnecte: false,
        seDeconnecter: () => { },
        verifierConnecte: () => { }

    }
)

function LoginContextProvider(props) {
    const [isLogged, setIsLogged] = useState(false);

    function seConnecter(user) {
        return fetch('http://localhost:3000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        //  if (token)
        //localStorage.setItem('token', token);
    }

    function register(user) {
        return fetch('http://localhost:3000/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    function seDeconnecter() {
        localStorage.removeItem('token');
        setIsLogged(false)

    }

    function verifyConnecte() {
        let token = localStorage.getItem('token');
        if (token)
            setIsLogged(true);
        else
            setIsLogged(false);
    }

    const context = {
        estConnecte: isLogged,
        seConnecter: seConnecter,
        seDeconnecter: seDeconnecter,
        verifierConnecte: verifyConnecte,
        inscrire: register
    }


    return <LoginContext.Provider value={context}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContextProvider;