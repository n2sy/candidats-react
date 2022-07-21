import { createContext, useState } from "react"

export const CandidatContext = createContext(
    {
        listeCandidats: [],
        selCandidat: {},
        addCandidat: () => { },
        deleteCandidat: () => { },
        updateCandidat: () => { },
        getCandidat: () => { }
    }
)

function CandidatContextProvider(props) {

    const [tabCandidats, setTabCandidats] = useState([]);
    const [selectedCand, setSelectedCand] = useState({});


    function ajouterCandidat(newCand) {
        // console.log("adddd");
        let token = localStorage.getItem('token');
        fetch('http://localhost:3000/cv/persons',
            {
                method: 'POST',
                body: JSON.stringify(newCand),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${token}`
                }
            }).then(res => {
                getAllCandidats();
                alert("Candidat Ajouté")
            }).catch((err) => {
                alert("Erreur inconnue !")
            })

    }

    function getAllCandidats() {
        fetch('http://localhost:3000/cv/persons')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTabCandidats(data);
            })
    }

    function supprimerCandidat(id) {
        let token = localStorage.getItem('token');
        fetch(`http://localhost:3000/cv/persons/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${token}`
                }
            }).then(res => {
                getAllCandidats();
                alert("Candidat Supprimé")
            }).catch((err) => {
                alert("Erreur inconnue !")
            })


    }
    function editerCandidat(uCand) {
        let token = localStorage.getItem('token');
        fetch(`http://localhost:3000/cv/persons/${selectedCand._id}`,
            {
                method: 'PUT',
                body: JSON.stringify(uCand),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${token}`

                }
            }).then(res => {
                getAllCandidats();
                alert("Candidat mis à jour")
            }).catch((err) => {
                alert("Erreur inconnue !")
            })
    }

    function chercherCandidat(id) {
        let sel = {};
        fetch(`http://localhost:3000/cv/persons/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                sel = data;
                setSelectedCand(data);
            })
        console.log(sel);
        return sel;
    }
    const context = {
        listeCandidats: tabCandidats,
        selCandidat: selectedCand,
        getCandidats: getAllCandidats,
        addCandidat: ajouterCandidat,
        deleteCandidat: supprimerCandidat,
        updateCandidat: editerCandidat,
        getCandidat: chercherCandidat
    }

    return <CandidatContext.Provider value={context}>
        {props.children}
    </CandidatContext.Provider>
}

export default CandidatContextProvider;