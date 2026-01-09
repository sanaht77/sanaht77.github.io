import { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./homeStyles.css";
import Particle from "../components/particle.jsx";
import Aurora from '../components/aurora.jsx';
import SpotlightCard from '../components/SpotlightCard';

export default function Home() {

  useEffect(() => {
    const typed = new Typed(".auto-type", {
        strings: ["Computer Science Student", 
                  "Aspiring Developer", 
                  "I love My Dog"],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
  <div className="page">

    <div className="bg">
      <Aurora
      colorStops={["#9b0d81","#6f51e6","#4405a3"]}
      amplitude={0.7}
      blend={0.65}
    />
    </div>
    
    
    <div className="content">

      <section className="section home">
        <h1 className="title">Hey, I'm Sanah!</h1>
        <div className="subtitle">
          <span className="auto-type"></span>
        </div>
      </section>

      <section className="section projects">

        <span className="tiles">
        <SpotlightCard className="tile" spotlightColor="rgba(131, 26, 201, 0.2)">
        <p>project 1</p>
        </SpotlightCard>
        <SpotlightCard className="tile" spotlightColor="rgba(131, 26, 201, 0.2)">
        <p>project 2</p>
        </SpotlightCard>
        <SpotlightCard className="tile" spotlightColor="rgba(131, 26, 201, 0.2)">
        <p>project 3</p>
        </SpotlightCard>
        </span>


      </section>

            <section className="section about">
        <p className="paragraph">  I'm Sanah, a second year computer science student at Simon Fraser University. 
          I began programming on my high school VEX Robotics team, 
          where I combined technical skills with teamwork to design 
          my own PID algorithm. As a Computer Science student, I've 
          built a strong foundation in data structures and algorithms 
          while developing proficiency in C++, C, React, HTML, and CSS. 
          Beyond coursework, I've explored personal projects that 
          strengthened my problem-solving and creativity. I'm eager to 
          keep learning and apply my skills to building impactful software.
        </p>

      </section>





    </div>
    </div>
    
  );
  
}
