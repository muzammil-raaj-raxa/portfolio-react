import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Muzammil</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/muzammilraza0001/" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=923145518318&text=Hello" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://www.instagram.com/raaj_raxa" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.twitter.com/raaj_raxa" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a href="https://github.com/muzammil-raaj-raxa" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Muzammil Raza. <br /> All right reserved
                </span>
            </div>
        </footer>
    )
}
import './Footer.css'

export default Footer
