
import { useContext, useRef } from 'react';
import { CandidatContext } from '../store/CandidatContext';
import { useNavigate } from 'react-router-dom';


export default function Update(props) {
    const candCtx = useContext(CandidatContext);
    const prenomValue = useRef();
    const nomValue = useRef();
    const ageValue = useRef();
    const professionValue = useRef();
    const avatarValue = useRef();
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const uCand = {
            prenom: prenomValue.current.value,
            nom: nomValue.current.value,
            age: ageValue.current.value,
            profession: professionValue.current.value,
            avatar: avatarValue.current.value,
        }
        candCtx.updateCandidat(uCand);
        navigate('/cv');
    }

    if (candCtx.selCandidat)
        return (
            <div class="container alert alert-info col-md-8">
                <form class="well form-horizontal">
                    <div class="profile-userpic">
                        <img src={require(`../assets/${candCtx.selCandidat.avatar}`)} class="img-responsive" alt="" />
                    </div>
                    <fieldset>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Prénom</label>
                            <input defaultValue={candCtx.selCandidat.prenom} ref={prenomValue} class="form-control" required="true" type="text" /></div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Nom</label>
                            <input defaultValue={candCtx.selCandidat.nom} ref={nomValue} class="form-control" required="true" type="text" /></div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Age</label>
                            <input defaultValue={candCtx.selCandidat.age} ref={ageValue} class="form-control" required="true" type="number" /></div>


                        <div class="form-group">
                            <label class="col-md-4 control-label">Profession</label>
                            <input defaultValue={candCtx.selCandidat.profession} ref={professionValue} class="form-control" type="text" /></div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Avatar</label>
                            <input defaultValue={candCtx.selCandidat.avatar} ref={avatarValue} class="form-control" type="text" /></div>

                    </fieldset>
                    <button onClick={submitHandler} type='submit' class="btn-success">Valider</button>
                </form>
            </div>

        )
    else {
        return (
            <div>aaaaa</div>
        )
    }
}