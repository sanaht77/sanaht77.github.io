import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
