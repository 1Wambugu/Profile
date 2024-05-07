import React from 'react';
import './works.css';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            
            <div className="worksImgs">
                <ol>
                    <li><a href="https://online-web-store.vercel.app/" className="worksLink">Portfolio 1</a></li>
                    <li><a href="https://goldwort-client.onrender.com/" className="worksLink">Portfolio 2</a></li>
                    <li><a href="https://goldworth-backend.onrender.com/" className="worksLink">Portfolio 3</a></li>
                    <li><a href="https://wildone.netlify.app/" className="worksLink">Portfolio 4</a></li>
                    <li><a href="https://curious-nougat-d494f0.netlify.app/" className="worksLink">Portfolio 5</a></li>
                </ol>
            </div>
            
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;