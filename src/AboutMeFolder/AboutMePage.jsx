import TecnologiaCard from './TecnologiaCard';
import './AboutMeStyle.scss';
function AboutMePage() {
  /*const [TecnologiaCard, setTecnologiaCard] = useState(true);

  window.addEventListener('scroll', function () {
    var cards_container = this.document.getElementsByClassName(
      'TecnologiasContainer'
    )[0];
    let altura = this.window.innerHeight / 2.5;
    var distancia = cards_container.getBoundingClientRect().top;
    if (distancia <= altura) {
      setTecnologiaCard('TecnologiasContainer FadeIn');
    } else {
      setTecnologiaCard('TecnologiasContainer');
    }
  });*/
  let cards = [
    {
      name: 'React',
      color: '',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    },
    {
      name: 'JavaScript',
      color: '#f7e018',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
    },
    {
      name: 'HTML',
      color: '',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360',
    },
    {
      name: 'CSS',
      color: '',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png?w=360',
    },
    {
      name: 'SCSS',
      color: '#cd669a',
      imgUrl:
        'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
    },
    {
      name: 'Redux',
      color: '',
      imgUrl:
        'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
    },
  ];
  return (
    <div className={'AboutMe'}>
      <h1 className='Title' >About Me</h1>
      <div className="Text">
        <p>
          Soy un Estudiante de desarrollo web en busca de nuevos desafíos para
          ponerme a prueba y aprender nuevas habilidades para crecer como
          programador y persona. Hice un cursado en Henry donde aprendí a hacer
          paginas web tanto desde el Frontend como el Backend , y he realizado
          cursos de desarrollo de videojuegos como hobby porque me divierte
          programar y crear mundos nuevos con mi imaginación.
        </p>
      </div>

      <h1 className='Title' >Skills</h1>
      
      <div className="Tecnologias">
        {
          <div className={"TecnologiasContainer"}>
            {cards.map((e,index) => {
              return <TecnologiaCard params={e} key={index} style={{animationDelay:"5s"}} />;
            })}
          </div>
        }
      </div>
    </div>
  );
}
export default AboutMePage;
