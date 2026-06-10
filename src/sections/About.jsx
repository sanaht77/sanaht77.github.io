import SectionHeading from "../components/SectionHeading";
import { profile, skills } from "../data/portfolio";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading
        number="01"
        label="About me"
        title="Learning deeply. Building intentionally."
      />

      <div className="about-grid">
        <div className="about-story">
          <p className="lead">
            I&apos;m a second-year computer science student at {profile.school},
            drawn to the place where logic meets creativity.
          </p>
          <p>
            My path into programming started with competitive robotics, where I
            learned that the best solutions come from patient iteration, clear
            communication, and a willingness to take things apart.
          </p>
          <p>
            Today, I&apos;m growing my foundation in software engineering while
            building web projects that are useful, accessible, and pleasant to
            spend time with. I&apos;m currently looking for opportunities to
            learn from a great team and contribute to real-world products.
          </p>
        </div>

        <aside className="skills-panel">
          <p className="panel-label">Tools I work with</p>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
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
