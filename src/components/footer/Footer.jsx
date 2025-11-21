import './Footer.css';
function Footer() {
    return(
        <>
        <div className="footer-card">
            <div className="foot-left">
                <p>&copy; 2025 by Utsav Prakash.</p>
                <p>Developed using React</p>
            </div>
            <div className="foot-right">
                <div className="right-one">
                    <p className='bo'>Contact</p>
                    <p className='li'>9693848522</p>
                </div>
                <div className="right-two">
                    <p className='bo'>Write</p>
                    <p className='li'>2052utsav@gmail.com</p>
                </div>
                <div className="right-three">
                    <p className='bo'>Follow</p>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Footer;