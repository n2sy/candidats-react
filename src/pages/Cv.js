import Details from '../components/Details';
import { useContext, useEffect, useState } from "react";
import Liste from "../components/Liste";
import { CandidatContext } from '../store/CandidatContext';


export default function Cv() {
    //console.log("xxxx");
    // const [tabCandidats, setTabCandidats] = useState([]);
    const [selectedCand, SetSelectedCand] = useState({});

    const candContext = useContext(CandidatContext);

    useEffect(() => {
        candContext.getCandidats();
        //   return () => { console.log("CLEAN"); }
    }, []);






    function getSelectedCandidat(selCand) {
        SetSelectedCand(selCand);
    }

    return (
        <div className="row">
            <div className="col-md-5">
                <Liste listCandidat={candContext.listeCandidats} onSelectedCand={getSelectedCandidat}></Liste>
            </div>
            <div className="col-md-7">
                <Details selCandidat={selectedCand}></Details>
            </div>

        </div>
    )

}