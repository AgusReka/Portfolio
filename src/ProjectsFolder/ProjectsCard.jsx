import { useState, useEffect } from "react";
export default function ProjectsCard({
  projectName,
  description,
  cantImagenes,
  gitHub,
  url,
}) {
  const RandomVal = () => {
    return Math.floor(Math.random() * (3000-2000) + 2000);
  };
  const [idImagen, setIdImagen] = useState(0);
  function CambioId() {
    let idNueva = idImagen + 1;
    //console.log(idNueva);
    if (idNueva === cantImagenes) {
      idNueva = 0;
    }
    setIdImagen(idNueva);
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      CambioId();
    }, RandomVal());
    return () => clearInterval(interval);
  });
  return (
    <div className="ProjectCard">
      <div className="Images">
        {new Array(cantImagenes).fill("").map((e, i) => (
          <img
            className={i === idImagen ? "imgOn" : "imgOff"}
            src={`./Art/ProjectsScreenshots/${projectName}/${i + 1}.png`}
            alt=""
            key={i}
          />
        ))}
      </div>
      <div className="HoverInfo">
        <h1 className="ProjectTitle">{projectName}</h1>
        <p className="ProjectDescription">{description}</p>
        <div className="Links">
          <a href={gitHub} target="_blank">
            <h1>GitHub</h1>
          </a>
          <a href={url} target="_blank">
            <h1>Web</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
