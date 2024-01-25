import React from "react";

export const About = () => {
  return (
    <div style={{
      width: " 70%",
      height: "60px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      margin: "20px 0px  ",
      display:"flex",
      alignContent:"center",
      minHeight:"70vh",
      margin:"auto"


    }}>
      <audio controls style={{
        width: "100%"
      }}>
        <source class="source" src="/Podcast.mp3" type="audio/mp3" />
      </audio>

    </div>
  );
};
