import { profile } from "../data/portfolio";
import ArrowIcon from "./ArrowIcon";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <p className="eyebrow eyebrow--light">Open to co-op opportunities</p>
        <h2>Let's Connect.</h2>
      </div>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowIcon />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ArrowIcon />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
          <ArrowIcon />
        </a>
        <a href={profile.medium} target="_blank" rel="noreferrer">
          Medium
          <ArrowIcon />
        </a>
      </div>

      <div className="footer-bottom">
        <p>Created by {profile.name}</p>
      </div>
    </footer>
  );
}
