import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
          </div>
          <p>
          I am a passionate and dedicated data science enthusiast with a strong foundation in mathematics, statistics, and programming. Through academic projects, I have gained hands-on experience in data collection, preprocessing, exploratory analysis, and modeling using Python, SQL, and machine learning frameworks like TensorFlow. I excel in translating complex technical concepts into actionable insights for non-technical stakeholders, with a focus on driving informed decision-making. Continuously learning and staying up to date with advancements in the field, I am eager to tackle real-world challenges, collaborate with diverse teams, and contribute my skills to projects that make a meaningful impact. I am excited about the opportunity to join a dynamic organization where I can further develop my data science expertise and learn from experienced professionals.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section> 
  )
};

export default About