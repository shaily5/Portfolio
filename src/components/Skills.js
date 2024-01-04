import '../styles/skills.css';
import Progressbar from './Progress';

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="h1">Skill Set</h1>
            <div className="skills-set">
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>HTML</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='95' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>CSS</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='90' height={30} />
                    </div>
                </div>
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>JAVASCRIPT</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='85' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>REACT</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='85' height={30} />
                    </div>
                </div>
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>Node</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='75' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>MongoDB</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='70' height={30} />
                    </div>
                </div>
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>Tailwind CSS</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='90' height={30} />
                    </div>
                    <div className='skill'>
                        <h3>MySQL</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='70' height={30} />
                    </div>
                </div>
                <div className='skills-sec'>
                    <div className='skill'>
                        <h3>Python</h3>
                        <Progressbar class="Progressbar" bgcolor="#57BCDA" progress='60' height={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
