import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Reactjs</h1>
      <h2>TP04 React III</h2>
      <AfficherExo1
        nom="Dupont"
        prenom="Alain"
        email="Dupont.Alain@gmail.com"
      />
      <AfficherExo2 scoreA={0} scoreB={0} />
      <AfficherExo3 />
      <AfficherExo4 />
    </div>
  );
}

const AfficherExo1 = (props) => {
  return (
    <>
      <div>
        <h3>Exercice 1 – Détail d’un client</h3>
        Créez un formulaire qui affiche le détail d’un client :
        <ul>
          <li>Nom</li>
          <li>Prénom</li>
          <li>Email</li>
        </ul>
        Les valeurs doivent pouvoir être modifiées
      </div>
      <Client nom={props.nom} prenom={props.prenom} email={props.email} />
    </>
  );
};

export function Client(props) {
  const [client, setClient] = useState({
    nom: props.nom,
    prenom: props.prenom,
    email: props.email
  });

  const handleChange = (evt) => {
    setClient({ ...client, [evt.target.dataset.id]: evt.target.value });
  };
  return (
    <ul>
      <li>Nom: {client.nom}</li>
      <li>Prenom: {client.prenom}</li>
      <li>Email: {client.email}</li>
      <input data-id="nom" value={client.nom} onChange={handleChange} />
      <input data-id="prenom" value={client.prenom} onChange={handleChange} />
      <input data-id="email" value={client.email} onChange={handleChange} />
    </ul>
  );
}

const AfficherExo2 = (props) => {
  return (
    <>
      <div>
        <h3>Exercice 2</h3>
        <h4>
          Affichez le résultat d’un match (nb buts équipe A : nb buts équipe B)
        </h4>
        Ajoutez deux champs de saisie : un pour le nombre de buts de chaque
        équipe (A et B) Lorsque le nombre de buts d’une équipe change, le
        résultat est mis à jour
      </div>
      <Resultat scoreA={props.scoreA} scoreB={props.scoreB} />
    </>
  );
};

const Resultat = (props) => {
  const [score, setScore] = useState({
    scoreA: props.scoreA,
    scoreB: props.scoreB
  });

  const handleChange = (evt) => {
    let stk = 0;
    if (evt.target.dataset.id === "scoreA") {
      stk = Number(score.scoreA) + Number(evt.target.value);
      setScore({ ...score, scoreA: stk });
    } else {
      stk = Number(score.scoreB) + Number(evt.target.value);
      setScore({ ...score, scoreB: stk });
    }
  };

  return (
    <>
      Resultat : {score.scoreA} - {score.scoreB}
      <p>
        <input data-id="scoreA" placeholder={0} onChange={handleChange} />
        <input data-id="scoreB" placeholder={0} onChange={handleChange} />
      </p>
    </>
  );
};

const AfficherExo3 = () => {
  return (
    <>
      <div>
        <h3>Exercice 3 – Calculatrice</h3>
        Réalisez une calculatrice avec deux champs de saisie, quatre boutons
        pour les opérations de base (+, -, *, /) et un champ pour l’affichage du
        résultat. Lorsqu’un bouton est cliqué, le calcul est fait et affiché.
      </div>
      <Calculette />
    </>
  );
};

const Calculette = () => {
  const [calc, setCalc] = useState({
    el1: 0,
    el2: 0,
    resultat: 0
  });

  const handleChange = (evt) => {
    setCalc({
      ...calc,
      [evt.target.dataset.id]: evt.target.value,
      resultat: 0
    });
  };

  const handleClick = (evt) => {
    //setCalc({ calc, resultat: 0 });
    let a = Number(calc.el1);
    let b = Number(calc.el2);

    if (evt.target.dataset.id === "add") {
      setCalc({ calc, resultat: a + b });
    } else if (evt.target.dataset.id === "sous") {
      setCalc({ calc, resultat: a - b });
    } else {
      if (a === 0 || b === 0) {
        setCalc({ calc, resultat: "Impossible d'opérer par 0" });
      } else if (evt.target.dataset.id === "mult") {
        setCalc({ calc, resultat: a * b });
      } else {
        setCalc({ calc, resultat: a / b });
      }
    }
  };

  return (
    <>
      <input data-id="el1" value={calc.el1} onChange={handleChange} />
      <input data-id="el2" value={calc.el2} onChange={handleChange} />
      <button data-id="add" onClick={handleClick}>
        +
      </button>
      <button data-id="sous" onClick={handleClick}>
        -
      </button>
      <button data-id="mult" onClick={handleClick}>
        *
      </button>
      <button data-id="div" onClick={handleClick}>
        /
      </button>
      <p>Resultat : {calc.resultat}</p>
    </>
  );
};

const AfficherExo4 = () => {
  return (
    <>
      <div>
        <h3>Exercice 4 – Créez une vue qui affiche</h3>
        Créez un formulaire qui affiche le détail d’un client :
        <ul>
          <li>Un titre</li>
          <li>Un champ de saisie</li>
          <li>Un bouton "Ajouter"</li>
          <li>Une liste d'éléments"</li>
        </ul>
        Lorsque le bouton "Ajouter" est cliqué, la valeur saisie dans le champ
        est ajoutée dans la liste
      </div>
      <Formulaire />
    </>
  );
};

const Formulaire = (props) => {};
