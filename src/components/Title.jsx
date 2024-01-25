

export default function Title({titleOfPart}) {
  return (
    <div style={{
        background: "#FFFFFF",
        textAlign: "center",
        marginTop: "20px",
      }}>
        <h1 style={{
          fontSize: "40px",
          backgroundColor: " rgba(0, 0, 255, .2)",
          borderRadius:"5px"
        }}>{titleOfPart}</h1>
      </div>
  )
}
