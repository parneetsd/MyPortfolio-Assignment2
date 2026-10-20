import './App.css';
import About  from './About';

function App() {
  return (
    <div className="App">

      <nav>
        <h2>PD | My Portfolio</h2>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Me</a>
      </nav>

      <div id="home">
        <h1>Welcome to My Portfolio</h1>
        <h2>Software Engineering Technology Student</h2>
        <p>
          Hello! Welcome to my personal portfolio website.
          Here you can learn about me, my education,
          my projects, and my skills.
        </p>
        <a href="#about">About Me</a>
      </div>
      <div id="about">
        <About />
        <h2>My Resume</h2>
        <p>Click below to view my resume.</p>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>

       <div id="projects">
  <h1>My Projects</h1>

  <h2>Courier4Less</h2>
  <img src="/images/courier.png" alt="Courier4Less Website" width="300" />
  <p>
    A courier website developed using WordPress.
    It includes shipping estimates, order placement,
    and tracking features.
  </p>

  <h2>Bug Smasher Game</h2>
  <img src="/images/bug.png" alt="Bug Smasher Game" width="300" />
  <p>
    An interactive browser game created using
    HTML, CSS, and JavaScript.
  </p>

  <h2>The 6ix Realty</h2>
<img src="/images/realty.png" alt="The 6ix Realty Website" width="300" />
<p>
  A real estate website created as part of my
  Web Interface Design coursework. The website
  includes property listings, individual property
  pages, navigation, and contact information.
</p>

      </div>

<div id="education">
  <h1>My Education</h1>

  <h2>Centennial College</h2>
  <p>Program: Software Engineering Technology</p>
  <p>Location: Toronto, Ontario</p>
  <p>2026 - Present</p>
  <p>Currently pursuing an Advanced Diploma.</p>

</div>

<div id="services">
  <h1>My Services</h1>

  <h2>Web Development</h2>
  <p>
    Creating simple and user-friendly websites
    using HTML, CSS, and JavaScript.
  </p>

  <h2>Programming</h2>
  <p>
    Developing basic programs and applications
    using Python, Java, and C#.
  </p>

  <h2>Database Management</h2>
  <p>
    Working with databases using SQL
    to store, manage, and retrieve information.
  </p>

</div>

<div id="contact">
  <h1>Contact Me</h1>

  <h2>Contact Information</h2>
  <p>Email: pdhanoa3@my.centennialcollege.ca</p>
  <p>Location: Toronto, Ontario, Canada</p>

  <h2>Send Me a Message</h2>

  <form onSubmit={(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const information = Object.fromEntries(formData);

    console.log(information);
    alert("Thank you for your message!");

    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }}>

    <p>First Name:</p>
    <input type="text" name="firstName" required />

    <p>Last Name:</p>
    <input type="text" name="lastName" required />

    <p>Contact Number:</p>
    <input type="tel" name="phone" required />

    <p>Email Address:</p>
    <input type="email" name="email" required />

    <p>Message:</p>
    <textarea name="message" required></textarea>

    <br />
    <br />

    <button type="submit">Send Message</button>

  </form>
</div>


    </div>
  );
}

export default App;