import SectionHeading from "../components/SectionHeading";
import { profile, skillGroups } from "../data/portfolio";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading
        number="01"
        label="About me"
        title="Developing skills through projects and curiosity."
      />

      <div className="about-grid">
        <div className="about-story">
          <p className="lead">
            I&apos;m a second-year computer science student at {profile.school},
            who is focused on growing as a developer.
          </p>
          <p>
            My path into programming started with competitive robotics, where I
            learned to debug under pressure, work closely with a team, and improve
            solutions through testing and iteration.
          </p>
          <p>
            Today, I&apos;m strengthening my foundation in software engineering through coursework
            and personal projects using a variety of tools. I'm currently looking for a co-op
            opportunity where I can learn from experienced developers, contribute to real products,
            and keep growing as a software developer.
          </p>
        </div>

        <aside className="skills-panel">
          <p className="panel-label">Tools I work with</p>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="availability">
            <span className="status-dot" />
            Open to internship opportunities
          </div>
        </aside>
      </div>
    </section>
  );
}
