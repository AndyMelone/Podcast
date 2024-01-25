export default function Episode({ url, name, description, title }) {
  return (
    <div
      style={{
        display: "flex",
        
        margin: "20px 0px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "20px",
        boxSizing: "border-box",
        boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
      
      }}
    >
      <div style={{
        width:"30%"
      }}>
        <img
          style={{
            width:"100%",
            height: "200px",
            borderRadius: "5px",
          }}
          src={url}
        />
      </div>
      <div  style={{
            marginLeft:"10px",
            width:"70%",
      }}>
        <h3 style={{
          textTransform: "uppercase",
        }}>{name}</h3>
        <p
          style={{
            fontStyle: "italic",
          }}
        >
          {title}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
