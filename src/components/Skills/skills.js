import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate Software Engineer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, React.js, Node.js, Vue.js, Python, Mongo db, Python and JavaScript, as well as UI/UX Design.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I have a strong background in UI/UX design, which revolves around creating engaging and user-friendly digital experiences..</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software development</h2>
                        <p>I specialize in JavaScript, Python, React.js,Django, Node.js and vue.js with a focus on creating solutions that align technical prowess with business objectives. Experienced in collaborative environments, I've contributed to successful projects by breaking down complex challenges and delivering scalable solutions. Notable achievements include developing an e-commerce platform that significantly improved user engagement.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>App design is my passion and expertise, where I combine creativity with user-centric principles to craft intuitive and visually appealing digital experiences. I specialize in UI/UX design, ensuring seamless navigation and engaging interactions for users.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;