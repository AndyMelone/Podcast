import Episode from "./Episode";
import Participant from "./Participant";
const user = [
  {
    photo: "lale.png",
    nom: "Lale (Nom complet)",
    poste: "Directeur Financier",
    description: "Description du Directeur Financier.",
  },
  {
    photo: "nico.png",
    nom: "N'guessan Yao Koua",
    poste: "Directeur Général de HumanBot",
    description:
      "Visionnaire de la technologie spécialisé en ingénierie robotique et intelligence artificielle, M. Koua a dirigé des équipes chez des leaders technologiques, favorisant l'innovation tout en respectant des normes éthiques strictes. Reconnu pour son engagement envers la durabilité, il a façonné des solutions robotiques intelligentes, positionnant HumanBot comme un acteur éthique du secteur. Son leadership vise à humaniser la technologie, créant un impact positif sur la vie quotidienne et ouvrant de nouvelles perspectives pour la robotique et l'IA.",
  },
  {
    photo: "ncho.png",
    nom: "N'cho boni  n'gbesso",
    poste: "Responsable technique",
    description: "Description du Directeur Financier.",
  },
  {
    photo: "ndri.png",
    nom: "N'DRI KOUAME OTHNIEL JUNIOR HERWAN",
    poste: "Directeur des ressources humaines",
    description: "N'DRI KOUAME OTHNIEL JUNIOR HERWAN, véritable prodige de l'école ivoirienne, a vu le jour le 15 août 1984. Son parcours académique débute au prestigieux lycée classique d'Abidjan, où sa brillance se révèle déjà.Après avoir triomphé au baccalauréat, Othniel Junior Herwan poursuit ses études en management et ressources humaines à l'illustre université canadienne d'Alberta, où il décroche avec éclat un Master dans cette discipline prestigieuse. Son talent exceptionnel ne passe pas inaperçu, et il fait ses premiers pas professionnels au sein de la banque d'affaires Standard Chartered, où il accumule six années d'expérience enrichissante.Sa renommée s'accroît encore davantage lorsqu'il est recruté par la Banque mondiale en tant que conseiller technique, chargé de la politique managériale du numérique et des ressources humaines. En janvier 2014, décidant de suivre sa voie, il présente sa démission et fait son retour triomphant dans son pays natal, la Côte d'Ivoire. À son retour, il intègre HumanBot en tant que Directeur des ressources humaines, un poste de haute responsabilité qu'il occupe avec éclat depuis lors, inscrivant ainsi son nom parmi les figures éminentes du monde professionnel ivoirien.",
  },
  {
    photo: "melone.png",
    nom: "Kouassi Melone Andy",
    poste: "Ingénieur Génie Logiciel",
    description:
      "Ingénieur logiciel chez HumanBot, je façonne l'avenir de la robotique en traduisant des concepts audacieux en réalités fonctionnelles. Mon expertise se situe à la convergence de l'intelligence artificielle, de la vision par ordinateur et du contrôle de mouvement, propulsant nos robots vers des performances exceptionnelles. Passionné par l'innovation, je relève les défis complexes avec créativité et précision, contribuant ainsi à redéfinir les possibilités de l'automatisation intelligente.",
  },
  {
    photo: "meite.png",
    nom: "Meite Lassina",
    poste: "Directeur Financier",
    description: "Directeur financier chez HumanBot, je suis chargé de superviser l'ensemble des activités financières. Mes responsabilités englobent la gestion stratégique des finances, la planification budgétaire, l'analyse financière approfondie et la communication transparente avec les parties prenantes externes, y compris les investisseurs. En tant que gardien de la stabilité financière, je joue le rôle central dans la prise de décisions éclairées pour atténuer les risques, maintenir la conformité réglementaire, et favoriser la croissance durable de l'entreprise. Je dirige également les équipes financières, assurant l'intégrité des rapports financiers et la gestion efficace de la trésorerie, tout en contribuant activement à la planification stratégique globale de l'organisation.",
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
