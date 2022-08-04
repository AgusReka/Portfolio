import ProjectsCard from "./ProjectsCard";
import "./ProjectsStyle.scss";
export default function Projects() {
  const projects = [
    {
      projectName: "PokeApi",
      description: "In this proyect I use an external Api to render pokemons and see information about them using React, Node.js, CSS, Redux, PostgreSQL",
      cantImagenes: 3,
      gitHub: "https://github.com/AgusReka/PI-Pokemon-main",
      url: "https://pokeapi-recabarren.vercel.app",
    },
    {
      projectName: "HenryShoes",
      description: "This is a E-Commerce made in a group of 6 people. I was in the frontEnd team for this proyect",
      cantImagenes: 5,
      gitHub: "https://github.com/JesusGambaro/PF-Grupo-9",
      url: "https://henry-shoes.vercel.app",
    },
    {
      projectName: "Portfolio",
      description: "This is my personal proyect to show you what I'm capable of and I will impruve over the years",
      cantImagenes: 5,
      gitHub: "https://github.com/JesusGambaro/PF-Grupo-9",
      url: "https://henry-shoes.vercel.app",
    },
  ];

  return (
    <div className="Projects">
      <h1 className="Title">Projects</h1>
      <div className={"ProjectsContainer"}>
        {projects.map((e, index) => {
          return <ProjectsCard 
          projectName={e.projectName}
          description={e.description}
          cantImagenes={e.cantImagenes}
          gitHub={e.gitHub}
          url={e.url}
          key={index} />;
        })}
      </div>
    </div>
  );
}
