import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/muzammilraza0001/" className="home__social-icon" target='_blank'>
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/muzammil-raaj-raxa" className="home__social-icon" target='_blank'>
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=923145518318&text=Hello" className="home__social-icon" target='_blank'>
                <i class="uil uil-whatsapp"></i>
            </a>

            <a href="https://www.instagram.com/raaj_raxa" className="home__social-icon" target='_blank'>
                <i class="uil uil-instagram"></i>
            </a>
        </div>
    )
}

export default Social
