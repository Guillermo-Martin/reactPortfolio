import React from 'react';
import './../assets/styles/about.css';

function About() {
  return (
    <div>
      <div className="container">
        
        <h1>About Me</h1>
          <img src="https://ca.slack-edge.com/TUFNTT7ND-UURHQ9VPE-194f27264248-512" alt="Guillermo" />
          
          <div className="row">
            <p>
              Hello! My name's Guillermo. I'm from Virginia Beach, Virginia. I have a Bachelor's of Science Degree in Biology from James Madison University and a Master's of Science Degree in Forensic Science with a specialization in criminalistics from the University of Central Oklahoma. I moved to the Bay Area more than 10 years ago when I got a job at the Alameda County Sheriff's Office Crime Lab as a forensic scientist. I worked there for more than 10 years, primarily in the Forensic Biology and DNA unit. I also got to work in latent prints and processed crime scenes.  During the last few years I was there, I gained an interest in coding, particularly in web development. I learned about web development through a class offered by Udemy and really enjoyed it. I decided to quit my job as a forensic scientist to pursue a career in web development.
            </p>

            <p>
              I recently earned my certificate in full-stack web development from the University of California, Berkeley Extension.  I have experience and am proficient with the MERN stack (MongoDB, Express.js, React.js, and Node.js).  During my studies, I developed a passion for front-end web development and design and have come to love using React.  Seeing beautifully designed websites that provide a great user experience motivates me to create the same and learn more about front-end technologies and design frameworks in order to provide a pleasant user experience.
            </p>

            <p>
              In my spare time, I enjoy playing video games, reading, exercising, exploring all that the Bay Area has to offer, and fencing.
            </p>

            
          </div>

          <p>
            Contact Me: <a href="mailto:gscalica@gmail.com">gscalica@gmail.com</a>
          </p>

          <p>
            See my <a href="https://github.com/Guillermo-Martin" target="_blank">GitHub</a>.
          </p>
      </div>
    </div>
  );
}

export default About;
