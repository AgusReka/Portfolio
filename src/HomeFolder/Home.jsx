import "./HomeStyle.scss";
export default function Home() {
  return (
    <div className="Home">
      <div className="ImagenTile">
        <img src="./Art/FotoPerfil.png" alt="FotoPerfil"/>
        <div className="Titles">
          <p className="textTitle">Agustin Recabarren</p>
          <p className="textTitle">FrontEnd Developer</p>

          <div className="Links">
            <a href="https://www.linkedin.com/in/agustin-recabarren-b163a1237/">
              <img src="./Art/linkedin.png" alt="" />
            </a>
            <a href="https://github.com/AgusReka">
              <img src="./Art/github-sign.png" alt="" />
            </a>
            <a href="https://wa.me/542615166191?text=Agustin%20Recabarren%20FrontEnd%20Developer">
              <img src="./Art/whatsapp.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
