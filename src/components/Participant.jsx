

export default function Participant({url,name}) {
  return (
    <div style={{
        width: "23%", // Vous pouvez ajuster ce pourcentage pour gérer l'espace entre les images
        boxSizing: "border-box", // Pour inclure la marge et la bordure dans la largeur
      }}>
        <img style={{
          width: "100%",
          height: "200px",
          objectFit:"contain"
        }} src={url} />
        <h3 style={{
            textAlign:"center",
        }}>{name}</h3>
      </div>
      
  )
}
