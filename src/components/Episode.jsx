

export default function Episode({url, episode,description}) {
  return (
    <div style={{
        width: "23%", // Vous pouvez ajuster ce pourcentage pour gérer l'espace entre les images
        boxSizing: "border-box", // Pour inclure la marge et la bordure dans la largeur
      }}>
        <img style={{
          width: "100%",
          height: "200px",
        }} src={url} />
        <h3>{episode}</h3>
        <p>{description}</p>
      </div>
  )
}
