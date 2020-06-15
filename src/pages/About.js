import React from 'react';
import guillermo_martin_half from './../assets/images/guillermo_martin_half.jpeg';
import './../assets/styles/about.css';

function About() {
  return (
    <div>
      <div className="container">
       
        {/* Title */}
        <div className="row mb-5">
          <h1>Hello, I'm Guillermo.  It's nice to meet you.</h1>
        </div>

        {/* Row to hold my picture and about me section */}
        <div className="row">
          
          {/* Column to hold my picture and icons */}
          <div className="col">

            <img src={guillermo_martin_half} alt="Guillermo's half marathon" className="w-100" />

            <p>Contact Me:</p>
            <div className="row">
              <a href="https://github.com/Guillermo-Martin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
              <a href="https://www.linkedin.com/in/guillermo-martin-10441046/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
              <a href="mailto:gscalica@gmail.com"><i className="fas fa-envelope icon"></i></a>
            </div>
            
          </div>

          {/* Column for About Me */}
          <div className="col">
            <p>
              I'm from Virginia Beach, Virginia. I have a Bachelor's of Science Degree in Biology from James Madison University and a Master's of Science Degree in Forensic Science with a specialization in criminalistics from the University of Central Oklahoma. I moved to the Bay Area more than 10 years ago when I got a job at the Alameda County Sheriff's Office Crime Lab as a forensic scientist. I worked there for more than 10 years, primarily in the Forensic Biology and DNA unit. I also got to work in latent prints and processed crime scenes.  During the last few years I was there, I gained an interest in coding, particularly in web development. I learned about web development through a class offered by Udemy and really enjoyed it. I decided to quit my job as a forensic scientist to pursue a career in web development.
            </p>
      
            <p>
              I recently earned my certificate in full-stack web development from the University of California, Berkeley Extension.  I have experience and am proficient with the MERN stack (MongoDB, Express.js, React.js, and Node.js).  During my studies, I developed a passion for front-end web development and design and have come to love using React.  Seeing beautifully designed websites that provide a great user experience motivates me to create the same and learn more about front-end technologies and design frameworks in order to provide a pleasant user experience.
            </p>

            <p>
              In my spare time, I enjoy playing video games, reading, exercising, exploring all that the Bay Area has to offer, and fencing.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;


// NOTES:
// how to reference a local image in react: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
