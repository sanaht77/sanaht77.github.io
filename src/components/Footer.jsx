import { profile } from "../data/portfolio";
import ArrowIcon from "./ArrowIcon";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <p className="eyebrow eyebrow--light">Have a project or opportunity?</p>
        <h2>Let&apos;s make something good.</h2>
      </div>
      <a className="footer-email" href={`mailto:${profile.email}`}>
        {profile.email}
        <ArrowIcon />
      </a>
      <div className="footer-bottom">
        <p>Designed and built by {profile.name}</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.medium} target="_blank" rel="noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  );
}
