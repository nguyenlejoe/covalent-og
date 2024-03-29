
interface datoProps { 
    img: string;
}

export default function GenericTemplate (props: datoProps) {
    
return <div
    style={{
      height: "100vh",
      width:"100%",
      paddingLeft: "40px",
      paddingRight: "40px",
      paddingBottom: "4px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      fontFamily: "'Titillium Web', sans-serif",
      fontWeight: "400",
      color: "white",
    }}
  >
    <div style={{display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", gap: "1rem", position:"relative"}}>
        <img style={{position: "absolute"}} src={"https://www.datocms-assets.com/86369/1674771072-covalent-13.jpg"}></img>
        <img style={{maxWidth: "500px", maxHeight: "500px", zIndex: "100"}} src={props.img}></img>
    </div>
  </div>
}