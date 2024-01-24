import { useState, useRef } from "react";
import Participant from "../Participant";
import Episode from "../Episode";
import Footer from "../Footer";

export const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
    <div style={{
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      margin: "auto"
    }}>
      <video autoPlay loop muted style={{
        border: "1px solid black",
        height: "300px",
        marginTop: "20px"

      }}>
        <source src="url de video " type="video/mp4" />
      </video>
      <div style={{
        background: "#FFFFFF",
        textAlign: "center",
        marginTop: "20px",
      }}>
        <h1 style={{
          fontSize: "50px",
          backgroundColor: "#7F8B92",
        }}>PODCAST INTELLIGENCE ARTIFICIELLE</h1>
      </div>
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "30px 0px",
        marginTop: "10px",
        padding: "20px 50px",

      }}>
        <h1>PODCAST INTELLIGENCE ARTIFICIELLE</h1>
        <p style={{
          fontSize:"20px",
          marginTop:"20px"
        }}>
          L'intelligence artificielle et les algorithmes modifient
          fondamentalement la manière dont les gens travaillent, apprennent,
          communiquent, consomment et vivent. La science et l'économie tentent
          depuis de nombreuses années de reproduire artificiellement l'esprit
          humain complexe. Dans le podcast "L'intelligence artificielle en
          Afrique", nous examinons comment ces projets se déroulent en Afrique,
          en nous penchant sur les questions suivantes : que peut faire l'IA, où
          est-elle appliquée, ce qu'elle a déjà changé, quelle contribution elle
          peut apporter à l'avenir et comment l'Afrique peut mieux profiter des
          avantages du développement technologique mondial. Dans chaque épisode,
          des experts ivoiriens abordent un nouvel aspect, expliquent le
          contexte, présentent des cas d'application et de nouveaux projets, et
          donnent des classifications précises. Dans les six épisodes du
          podcast, nous souhaitons présenter le thème de l'IA sous de nombreuses
          facettes différentes, rendre simples des sujets complexes, donner un
          aperçu de ce que l'intelligence artificielle (IA) signifie pour la
          société et l'économie en Côte d'Ivoire avec des experts invités.
        </p>
        <p>px
          Voici un bref résumé qui explique en quoi consiste la série de
          podcasts :
        </p>
        <div style={{
          border:"1px black dashed",
          backgroundColor:"#DEE2E2",
          width:" 100%",
          height:"60px",
          alignItems:"center",
          display:"flex",
          justifyContent:"center",
          margin:"20px 0px  "

        }}>
          <audio ref={audioRef} src="/audio/votre_audio.mp3" type="audio/mp3" />
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
        <div style={{
          margin: "30px 0px"
        }}>
          <h1>Moderateur</h1>
          <div style={{
  display: "flex",
  alignItems: "flex-start"
}}>
  <div style={{ marginRight: "30px" }}>
    <img style={{
      width: "200px",
      height: "200px",
      height: "auto",
      border: "1px solid black",
    }} src="lale.png" />
  </div>
  <div style={{ flex: "1" }}>
    <p style={{
      maxWidth: "100%",
      fontSize: "20px",
    }}>
      Coordonnateur de la Cellule d’Innovation et de Développement (CID) de l’ESATIC (Ecole Supérieure Africaine des TIC) depuis avril 2017. Dr. Kouassi Franklin totalise 07 années dans l’enseignement supérieur et plus de 10 ans dans le secteur privé. Actuellement, Il est Maitre-Assistant d’économie et est l’auteur de plusieurs articles scientifiques parus dans des revues spécialisées internationales.

      Dr. Franklin Kouassi a été lauréat consécutivement de trois prix Nationaux d’excellence de la République de Côte d’Ivoire avec la structure qu’il coordonne. En 2018, avec le projet SMART CITY, un projet portant sur la Domotique, en 2019 avec un projet de digitalisation de l’assurance en Côte d’Ivoire « easyassur.net » avec la structure SIIN (Société Ivoirienne d’Intelligence Numérique) et en 2020, la CID, occupe la troisième place et la deuxième place avec, le projet de la POUBELLE INTELLIGENTE et le projet SERCOVID.
    </p>
  </div>
</div>

          <div style={{
            background: "#FFFFFF",
            textAlign: "center",
            marginTop: "20px",
          }}>
            <h1 style={{
              fontSize: "40px",
              backgroundColor: "#7F8B92",
            }}>EPISODES</h1>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-evenly",
            margin: "20px 0px"
          }}>

            <Episode url="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" episode="Episode 1" description="" />
          </div>
        </div>
      </div>
      <div style={{
        background: "#FFFFFF",
        textAlign: "center",
        marginTop: "20px",
      }}>
        <h1 style={{
          fontSize: "40px",
          backgroundColor: "#7F8B92",
        }}>PARTICIPANTS</h1>
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-evenly",
        margin: "20px 0px"
      }}>
        <Participant name="KOUASSI melone martial andy " url="melone.png" />
        <Participant name="LALE" url="lale.png" />
        <Participant name="N CHO" url="ncho.jpg" />
        <Participant name="LALE" url="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Participant name="LALE" url="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Participant name="LALE" url="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Participant name="LALE" url="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Participant name="LALE" url="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      </div>

    </div>
<Footer />
    </div>
  );
};
