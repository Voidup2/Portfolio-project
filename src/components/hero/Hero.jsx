import './Hero.css';
import profilePic from '../../assets/up2.jpg';
import resumePDF from '../../assets/resume_up.pdf';
function Hero(){
    return(
        <>
        <div className='body'>
            <div className='hero-section'>
                <div className='profile-section'>
                    <img src={profilePic} alt='Utsav Prakash' className='profile-pic'></img>
                    <h1>Utsav Prakash</h1>
                    <hr className='divider'></hr>
                    <p className='designation'>Student</p>
                    <div className='contact-buttons'>
                        <a href="https://github.com/Voidup2"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/utsav-prakash-a396302b5/"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/anime_weebs_up/?__pwa=1"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className='hero-content'>
                    <h2>Hello !!</h2>
                    <p class="subtitle">I am a final year student pursuing bachelors in Computer Science</p>
                    <div class="button-group">
                        <a href={resumePDF} className="btn btn-primary">RESUME</a>
                        <a href="#project-section" className="btn btn-secondary">PROJECTS</a>
                    </div>
                    <p>I have a kneen interest in software development as I am actively building projects with React and have a deep interset in Java programming language.</p>
                    <p>I am also expanding my knowledge in other high-demand areas, including machine learning, cloud computing, and the fundamentals of computer networking and security.</p>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Hero