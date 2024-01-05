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
                        <p>Hi, there. I am Shaily Patel and I have completed my B.tech in SAL College OF Engineering in 2022. 1.5 years of industry experience in Java, Python, JavaScript, ReactJS, NodeJS, MongoDB, JIRA, Agile.Quick learner with a dynamic mindset, ready to adapt and contribute innovative ideas to drive success in a collaborative and forward-thinking environment.
                            Seeking internship opportunities to apply extensive knowledge and gain valuable real-world experience.</p>
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
