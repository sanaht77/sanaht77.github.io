import resumePdf from "../assets/Sanah Tatla - Resume.pdf";
import ArrowIcon from "../components/ArrowIcon";
import SectionHeading from "../components/SectionHeading";
import { educationItems, experienceItems } from "../data/portfolio";

function ResumeColumn({ title, items }) {
  return (
    <div className="resume-column">
      <h3 className="resume-column-title">{title}</h3>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.title}-${item.period}`}>
            <p className="timeline-period">{item.period}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
            </div>
            <p className="timeline-description">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="resume-header">
        <SectionHeading
          number="03"
          label="Education & Experience"
          title="My journey so far"
        />
        <a className="button button--dark" href={resumePdf} target="_blank" rel="noreferrer">
          View full resume
          <ArrowIcon />
        </a>
      </div>

      <div className="resume-columns">
        <ResumeColumn title="Education" items={educationItems} />
        <ResumeColumn title="Experience" items={experienceItems} />
      </div>
    </section>
  );
}
