import Details from "../components/Details";
import { useContext, useEffect, useState } from "react";
import Liste from "../components/Liste";
import { CandidatContext } from "../store/CandidatContext";
import { Route, Routes } from "react-router-dom";
import Update from "../components/Update";

export default function Cv() {
  console.log("xxxx");
  // const [tabCandidats, setTabCandidats] = useState([]);
  const [selectedCand, SetSelectedCand] = useState({});

  const candContext = useContext(CandidatContext);

  useEffect(() => {
    candContext.getCandidats();
    //   return () => { console.log("CLEAN"); }
  }, []);

  // const queryParams = new URLSearchParams(window.location.search);
  // const q1 = queryParams.get("name");
  // const q2 = queryParams.get("age");
  // console.log(q1, q2);

  function getSelectedCandidat(selCand) {
    SetSelectedCand(selCand);
  }
  if (candContext.listeCandidats.length)
    return (
      <>
        <div className="row">
          <div className="col-md-5">
            <Liste
              listCandidat={candContext.listeCandidats}
              onSelectedCand={getSelectedCandidat}
            ></Liste>
          </div>
          <div className="col-md-7">
            <Details selCandidat={selectedCand}></Details>
          </div>
        </div>
      </>
    );
  else return <div>NO DATA</div>;
}
