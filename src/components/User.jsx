import Episode from "./Episode";
import Participant from "./Participant";
const user = [
  {
    photo: "melone.png",
    nom: "Kouassi Melone Andy",
    poste: "Ingénieur Génie Logiciel",
    description:
      "Ingénieur logiciel chez HumanBot, je façonne l'avenir de la robotique en traduisant des concepts audacieux en réalités fonctionnelles. Mon expertise se situe à la convergence de l'intelligence artificielle, de la vision par ordinateur et du contrôle de mouvement, propulsant nos robots vers des performances exceptionnelles. Passionné par l'innovation, je relève les défis complexes avec créativité et précision, contribuant ainsi à redéfinir les possibilités de l'automatisation intelligente.",
  },
  {
    photo: "nico.png",
    nom: "N'guessan Yao Koua",
    poste: "Directeur Général de HumanBot",
    description:
      "Visionnaire de la technologie spécialisé en ingénierie robotique et intelligence artificielle, M. Koua a dirigé des équipes chez des leaders technologiques, favorisant l'innovation tout en respectant des normes éthiques strictes. Reconnu pour son engagement envers la durabilité, il a façonné des solutions robotiques intelligentes, positionnant HumanBot comme un acteur éthique du secteur. Son leadership vise à humaniser la technologie, créant un impact positif sur la vie quotidienne et ouvrant de nouvelles perspectives pour la robotique et l'IA.",
  },
  {
    photo: "ndri.png",
    nom: "N'DRI KOUAME OTHNIEL JUNIOR HERWAN",
    poste: "Développeur d'Application",
    description: "Description du développeur d'application.",
  },
  {
    photo: "meite.png",
    nom: "Meite Lassina",
    poste: "Directeur Financier",
    description: "Description du Directeur Financier.",
  },
  {
    photo: "ncho.png",
    nom: "N'cho bony  n'gbesso",
    poste: "Directrice",
    description: "Description du Directeur Financier.",
  },
  {
    photo: "lale.png",
    nom: "Lale (Nom complet)",
    poste: "Directeur Financier",
    description: "Description du Directeur Financier.",
  },
];

export default function User() {
  return (
    <div>
      {user.map((user) => (
        <Episode
          key={user.nom} // Ajoutez une clé unique pour chaque élément lors de l'itération sur un tableau
          url={user.photo}
          name={user.nom}
          title={user.poste}
          description={user.description}
        />
      ))}
    </div>
  );
}

export function User2() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "start",
          margin: "20px 0px",
        }}
      >
        {user.map((user) => (
          <Participant name={user.nom} url={user.photo} title={user.poste} />
        ))}{" "}
      </div>
    </div>
  );
}
