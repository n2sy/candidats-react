import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CandidatContext } from "../store/CandidatContext";



export default function AddCv() {
    const [formValue, setFormValue] = useState(
        {
            prenom: '',
            nom: '',
            age: '',
            profession: '',
            avatar: ''
        }
    );
    const candCtx = useContext(CandidatContext);
    const navigate = useNavigate();

    function changeHandler(event) {

        setFormValue((prev) => {
            prev[event.target.name] = event.target.value;
            return ({
                ...prev,
            })
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formValue);
        candCtx.addCandidat(formValue);
        navigate('/cv');
    }
    return (
        <form>
            <label htmlFor="prenom">Prénom</label>
            <input className="form-control" name='prenom' id='prenom' onChange={changeHandler}></input>
            <label htmlFor="prenom">Nom</label>
            <input className="form-control" id='nom' name='nom' onChange={changeHandler}></input>
            <label htmlFor="prenom">Age</label>
            <input className="form-control" type="number" id='age' name='age' onChange={changeHandler}></input>
            <label htmlFor="prenom">Profession</label>
            <input className="form-control" id='profession' name='profession' onChange={changeHandler}></input>
            <label htmlFor="prenom">Avatar</label>
            <input className="form-control" id='avatar' name='avatar' onChange={changeHandler}></input>
            <br>
            </br>
            <button onClick={submitHandler} class="btn btn-primary">Valider</button>
        </form>
    )
}