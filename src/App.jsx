import { useState, useEffect } from "react";
import "./App.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

const projects = [
  {
    name: "todo-app",
    text: "A simple task manager built with React.",
    link: "#",
  },
  {
    name: "tic tac toe",
    text: "A game for two players built with html,css,js",
    link: "#"
  },
  {
    name: "my-portfolio",
    text: "This website you are looking at.",
    link: "#",
  },
  {
    name: "Three-axis arm bot",
    text: "this is a hardware project built at Makerspace",
    link: "#",
  },
  {
    name:"Calculator",
    text:"this is a basic calculator built with plain html,css,js",
    link:"#",
  }
];

function App() {
  const fullText = "Hi, I am Aarti.";
  const [text, setText] = useState("");

  // typing effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div className="app">
      <nav className="nav">
        <span className="logo">&lt;aarti /&gt;</span>
        <div className="links">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <header className="hero">
        <p className="prompt">$ whoami</p>
        <h1>
          {text}
          <span className="cursor">|</span>
        </h1>
        <p className="subtitle">Computer Science Student | Aspiring Full-Stack Developer |

          I build, experiment, and learn by turning ideas into working projects. Currently exploring web development, software engineering, and hardware-based innovation.

        </p>
        <a href="#projects" className="btn">
          view projects
        </a>
      </header>

      <section id="about" className="section">
        <div>
        <h2>// about</h2>
        <p>
          I'm Aarti Shaw, a B.Tech Computer Science and Engineering student at JECRC University, currently interning at DTC and contributing as a core member of JUMakerspace.

          I'm passionate about building useful digital products, exploring new technologies, and learning by doing. My journey spans web development, programming, and hands-on hardware projects.

          From developing interfaces with React to experimenting with Arduino and robotics, I enjoy understanding how things work and bringing ideas to life through code.

          Currently focused on strengthening my development skills, solving problems with DSA, and building projects that help me grow into a well-rounded software engineer.
        </p>
        </div>
        <img src="/image.jpg" alt="Aarti" className="profile-pic"/>
      </section>

      <section id="skills" className="section">
        <h2>// skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>// projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.name} className="card">
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <a href={project.link}>view code &rarr;</a>
            </div>
          ))}
        </div>
      </section>
      <section id="education" className="section">
        <h2>//Education</h2>
        <p>

          JECRC University

          B.Tech — Computer Science and Engineering

          2025–2029

          Building a strong foundation in programming, data structures, computer systems, and software development while exploring practical projects beyond the classroom.</p>

      </section>

      <section id="contact" className="section">
        <h2>// contact</h2>
        <p>Email: aarti24shaw2006@gmail.com</p>
        <p>GitHub: https://github.com/aartishaw2406-cmyk</p>
        <p>Linkedin:https://www.linkedin.com/in/aarti-shaw-43817931a/ </p>
      </section>

      <footer className="footer">
        <p>
          Designed & built by <span>Aarti Shaw</span>
        </p>
        <p className="footer-terminal">
          git commit -m "building my future"
        </p>
      </footer>
    </div>
  );
}

export default App;