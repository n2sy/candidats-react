import { Link, useHref } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from '../store/LoginContext';



export default function Navbar() {
    const LogCtx = useContext(LoginContext);

    if (LogCtx.estConnecte)
        return (
            <ul class="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cv" >CV</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cv/add" >Add</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/food" >Food</Link>
                </li>
                <li className="nav-item">
                    <button onClick={() => { LogCtx.seDeconnecter() }} className="nav-link">Logout</button>
                </li>
            </ul>
        )
    else
        return (
            <ul class="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cv" >CV</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/watch" >Watch</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/watch2" >Watch 2</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/food" >Food</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link>
                </li>
            </ul>
        )
}