import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { CandidatContext } from '../store/CandidatContext';
import LoadingSpinner from './Spinner';


export default function Infos(props) {
    const { id } = useParams();
    const candCtx = useContext(CandidatContext);
    const navigate = useNavigate();


    useEffect(() => {
        candCtx.getCandidat(id);
    }, []);
    console.log(candCtx.selCandidat);

    function deleteHandler() {
        if (window.confirm('Etes-vous sur de vouloir supprimer cette personne ? ')) {
            candCtx.deleteCandidat(candCtx.selCandidat._id);
            navigate('/cv');
        }

    }

    if (candCtx.selCandidat.avatar)
        return (
            <div className="d-flex justify-content-center">
                <div className="col-lg-8 push-lg-4">
                    <div className="tab-content p-b-3">
                        <div className="tab-pane active" id="profile">

                            <div className="d-flex justify-content-center">
                                <img width="150px" height="150px" class="rounded-circle align-content-center"
                                    src={require(`../assets/${candCtx.selCandidat.avatar}`)} alt="" />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="m-t-2"><span className="fa fa-clock-o ion-clock pull-xs-right"></span> Informations</h4>
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Prénom</strong> {candCtx.selCandidat.prenom}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Nom</strong> {candCtx.selCandidat.nom}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Age</strong>{candCtx.selCandidat.age} ans
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Profession</strong> {candCtx.selCandidat.profession}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Image</strong> {candCtx.selCandidat.avatar}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={deleteHandler} className="btn btn-danger">
                                            Delete
                                        </button>
                                        <Link to={'/cv/' + candCtx.selCandidat._id + '/edit'}>
                                            <button className="btn btn-primary" >
                                                Update
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    else
        return (
            <LoadingSpinner />
        )
}