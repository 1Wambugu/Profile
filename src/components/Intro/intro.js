import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import martinImg from '../../assets/martin.png';

const Intro = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = martinImg; // Use the imported image file URL
        link.setAttribute('download', 'martin.png'); // Set the desired file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">W.Martin</span> <br />Software Engineer</span>
                <p className="introPara">I am a skilled Software Engineer with experience in creating<br />visually appealing and user-friendly web applications.</p>
                
                {/* Use a button for the download action */}
                <button className="btn" onClick={handleDownload}>
                    <img src={btnImg} alt="Hire" className='btnImg'/> Hire Me
                </button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
