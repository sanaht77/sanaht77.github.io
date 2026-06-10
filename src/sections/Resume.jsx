import resumeImage from "../assets/resumeNoAddress.png";
import ArrowIcon from "../components/ArrowIcon";
import SectionHeading from "../components/SectionHeading";
import { resumeItems } from "../data/portfolio";

export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="resume-header">
        <SectionHeading
          number="03"
          label="Experience"
          title="The story so far."
        />
        <a className="button button--outline" href={resumeImage} target="_blank" rel="noreferrer">
          View full resume
          <ArrowIcon />
        </a>
      </div>

      <div className="timeline">
        {resumeItems.map((item) => (
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
    </section>
  );
}
