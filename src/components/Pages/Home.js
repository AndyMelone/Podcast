import Slider from "react-slick";
import { useState, useRef } from "react";
import Participant from "../Participant";
import Episode from "../Episode";
import Footer from "../Footer";
import Title from "../Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User, { User2 } from "../User";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    infinite: true,
  };

  const images = [
    "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532186773960-85649e5cb70b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1436056497/photo/distribution-warehouse-with-plexus-automated-guided-vehicles-and-robots-working-on-conveyor.jpg?s=1024x1024&w=is&k=20&c=fkww-vdJqbueeWiL8FR4GQxwdQnIjJ-uzNbFokO0ZIQ=",
    "https://images.unsplash.com/photo-1535378273068-9bb67d5beacd?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1667123113124-0980f3214baa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663126432237-66cb611134ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1339547170/photo/robotic-arms-technology-background.jpg?s=1024x1024&w=is&k=20&c=ndsV9aeo7DgMHbjHnMBd0eVD75ibw2Jt7JVedNdjkz0=",
    "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1658137857/photo/datalake-big-data-warehouse-data-lake-platform-analytics-technology.jpg?s=1024x1024&w=is&k=20&c=mNsOAzIPzBnP4gk9UWKfGEO7aPxTEbXEw4hgj8yk6JI=",
    "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <div style={{ width: "100%", margin: "0 auto", margin: "30px 0px" }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <Title titleOfPart="NOTRE VISION" />
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "30px 0px",
            marginTop: "10px",
            padding: "20px 50px",
          }}
        >
          <h1>PODCAST INTELLIGENCE ARTIFICIELLE</h1>
          <p
            style={{
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            Chez HumanBot, notre vision est profondément enracinée dans
            l'exploration audacieuse de la robotique pour façonner un avenir
            innovant et résilient. Nous croyons en la puissance transformante de
            la technologie pour résoudre les défis complexes et améliorer la
            vie. Notre engagement envers l'excellence se reflète dans notre
            approche holistique, où la durabilité, la performance et
            l'interaction homme-machine convergent harmonieusement. Imaginons un
            monde où les robots ne sont pas simplement des outils, mais des
            partenaires collaboratifs, améliorant la productivité tout en
            préservant notre environnement. Chez nous, chaque innovation repose
            sur une compréhension approfondie des besoins de nos clients,
            inspirant des solutions sur mesure qui dépassent les attentes. Nous
            sommes à l'avant-garde de l'industrie, explorant des avenues telles
            que l'intelligence artificielle, la robotique autonome et la
            connectivité avancée pour créer des systèmes intelligents et
            adaptables. En embrassant la convergence technologique, nous ouvrons
            des horizons inexplorés pour des applications robotiques novatrices
            dans divers secteurs. Notre vision s'étend au-delà des frontières,
            créant des liens durables entre l'homme et la machine. Nous nous
            efforçons de bâtir un monde où la robotique favorise l'inclusion
            sociale, économique et environnementale. Ensemble, imaginons et
            réalisons un avenir où la technologie intelligente éclaire notre
            chemin vers de nouveaux sommets d'accomplissement humain et
            technologique."
          </p>

          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              color: "red",
            }}
          >
            Voici un bref podcast issu d une serie que nous avons effectue et
            qui presente notre entreprise et ses realisations :
          </p>
          <div
            style={{
              width: " 100%",
              height: "60px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px  ",
            }}
          >
            <audio
              controls
              style={{
                width: "100%",
              }}
            >
              <source class="source" src="/Podcast.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <h1>Moderateur</h1>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div style={{ marginRight: "30px" }}>
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    height: "auto",
                    border: "1px solid black",
                  }}
                  src="lale.png"
                />
              </div>
              <div style={{ flex: "1" }}>
                <p
                  style={{
                    maxWidth: "100%",
                    fontSize: "20px",
                  }}
                >
                  Charge de communication au sein de l entreprise innovante
                  HumanBot, il est responsable de creer des contenus pertinents
                  et engageants qui mettent en lumiere les avancees remarquables
                  de notre entreprise dans le domaine de la robotique, il s
                  efforce de partager une vision futuriste et les reussites de
                  HumanBot a travers divers supports mediatiques.
                </p>
              </div>
            </div>

            <Title titleOfPart="PARTICIPANTS" />
            <User />
          </div>
        </div>
        <Title titleOfPart="LES FONDATEURS" />

        <User2 />
      </div>
      <Footer />
    </div>
  );
};
