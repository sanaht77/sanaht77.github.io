import ArrowIcon from "../components/ArrowIcon";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        number="02"
        label="Selected work"
        title="My favourite projects"
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card project-card--${project.accent}`} key={project.title}>
            <div className="project-topline">
              <span>{project.number}</span>
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                <ArrowIcon />
              </a>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
