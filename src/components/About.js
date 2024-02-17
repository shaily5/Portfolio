import pic from '../assets/46.jpeg'
import '../styles/about.css'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import Skills from './Skills';

const About = () => {
    return (
        <div className="about" id="about" >
            <h1 className='h1'>About</h1>
            <div className="card" id="card">
                <div className="image">
                    <img src={pic} alt="pic" className="my-pic" />
                </div>
                <hr />
                <div className="content">
                    <div className='info'>
                        <p>Hi there! 👋 I am a Master of Applied Computing student at the University of Windsor, currently upskilling myself.</p>
                        <p>👩‍💻 I have 1.5 years of professional experience in the tech industry, proficient in Java, Python, JavaScript, ReactJS, NodeJS, and MongoDB. 
                            <br/>I also have a great understanding of Software Development Life Cycle (SDLC), object-oriented concepts, and proficiency in data structures and algorithms.
                             I am eager to contribute to innovative projects and further enhance my skills in a dynamic work environment.</p>
                        <p>🌏 Let's connect and explore collaboration opportunities! 🤝</p>
                        <p>🔎 Currently seeking internship opportunities to apply my extensive knowledge and gain valuable real-world experience.</p>
                    </div>
                    <div className="social-media">
                        <div className='link-group'>
                            <a href='https://www.instagram.com/shailyy5/' rel="noreferrer" target="_blank"><BsInstagram /></a>
                        </div>
                        <div className='link-group'>
                            <a href='https://github.com/shaily5' rel="noreferrer" target="_blank"><BsGithub /></a>
                        </div>
                        <div className='link-group'>
                            <a href='https://www.linkedin.com/in/shaily5/' rel="noreferrer" target="_blank"><BsLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>

            <Skills />
        </div>
    );
}

export default About;
