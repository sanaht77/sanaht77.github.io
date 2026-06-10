import headshot from "../assets/headshot.jpg";
import { profile } from "../data/portfolio";
import ArrowIcon from "../components/ArrowIcon";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Hi, I&apos;m {profile.name}</p>
        <h1>
          Growing as a
          <span className="hero-accent"> Developer.</span>
        </h1>
        <p className="hero-intro">
          I’m a computer science student exploring software development 
          through coursework, personal projects, and a curiosity for solving real-world problems.
        </p>
        <div className="hero-actions">
          <a className="button button--dark" href="#projects">
            Explore my work
            <ArrowIcon />
          </a>
          <a className="text-link" href="#contact">
            Let&apos;s connect
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <img src={headshot} alt={`${profile.name} smiling`} />
        </div>
        <div className="orbit orbit--one" />
        <div className="orbit orbit--two" />
        <p className="location-note">
          <span />
          Based in {profile.location}
        </p>
      </div>

      <a className="scroll-cue" href="#about">
        Scroll to discover
        <ArrowIcon direction="down" />
      </a>
    </section>
  );
}
