import { useState, useRef } from "react";

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
      <video autoPlay loop muted>
        <source src="url de video " type="video/mp4" />
      </video>
      <div>
        <h1>PODCAST INTELLIGENCE ARTIFICIELLE</h1>
      </div>
      <div>
        <h3>PODCAST INTELLIGENCE ARTIFICIELLE</h3>
        <p>
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
          société et l'économie en Côte d'Ivoire avec des experts invités.{" "}
        </p>
        <p>
          Voici un bref résumé qui explique en quoi consiste la série de
          podcasts :
        </p>
        <div>
          <audio ref={audioRef} src="/audio/votre_audio.mp3" type="audio/mp3" />
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
      </div>
      <div>
        <h3>Moderateur</h3>
      </div>
    </div>
  );
};
