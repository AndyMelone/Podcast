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
          backgroundColor: "#C6CFD4",
        }}>NOTRE VISION</h1>
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
          Chez HumanBot, notre vision est profondément enracinée dans l'exploration audacieuse de la robotique pour façonner un avenir innovant et résilient. Nous croyons en la puissance transformante de la technologie pour résoudre les défis complexes et améliorer la vie. Notre engagement envers l'excellence se reflète dans notre approche holistique, où la durabilité, la performance et l'interaction homme-machine convergent harmonieusement.

Imaginons un monde où les robots ne sont pas simplement des outils, mais des partenaires collaboratifs, améliorant la productivité tout en préservant notre environnement. Chez nous, chaque innovation repose sur une compréhension approfondie des besoins de nos clients, inspirant des solutions sur mesure qui dépassent les attentes.

Nous sommes à l'avant-garde de l'industrie, explorant des avenues telles que l'intelligence artificielle, la robotique autonome et la connectivité avancée pour créer des systèmes intelligents et adaptables. En embrassant la convergence technologique, nous ouvrons des horizons inexplorés pour des applications robotiques novatrices dans divers secteurs.

Notre vision s'étend au-delà des frontières, créant des liens durables entre l'homme et la machine. Nous nous efforçons de bâtir un monde où la robotique favorise l'inclusion sociale, économique et environnementale. Ensemble, imaginons et réalisons un avenir où la technologie intelligente éclaire notre chemin vers de nouveaux sommets d'accomplissement humain et technologique."
        </p>
        
        <p style={{
          fontSize:"20px",
          margin:"20px 0px",
          color:"red",
        }}>
          Voici un bref podcast issu d une serie que nous avons effectue et qui presente notre entreprise et ses realisations :
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
      fontSize: "32px",
    }}>
      Charge de communication au sein de l entreprise innovante HumanBot, il est responsable de creer des contenus pertinents et engageants qui mettent en lumiere les avancees remarquables de notre entreprise dans le domaine de la robotique, il s efforce de partager une vision futuriste et les reussites de HumanBot a travers divers supports mediatiques.
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
