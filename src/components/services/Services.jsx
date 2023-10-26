import React from 'react'
import './Services.css'
import { useState } from 'react'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button"
                        onClick={() => toggleTab(1)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>

                            <h3 className="services__modal-title">
                                Product Designer
                            </h3>

                            <p className="services__modal-description">Over 3 years, my service has consistently delivered exemplary work to a diverse clientele, including individuals and esteemed corporations.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">UI development specialist.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Web page developer.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">UX interaction creator.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Brand positioning strategist.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Product design and mockup expert.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Ui / Ux <br /> Designer
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button"> View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">
                                Ui/Ux Designer
                            </h3>

                            <p className="services__modal-description">With a 3 year track record, our service consistently delivers exceptional work to a diverse client base, including individuals and esteemed corporations.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">User Interface Development Specialist.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Web Page Development Expert.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Creator of UX Interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Brand Positioning Strategist.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Expert in Product Design and Mockups.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button"> View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}
                                className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">
                                Visual Designer
                            </h3>

                            <p className="services__modal-description">Service with more than 3 year of experience. Providing quality work to  clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">I develop user interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">I create ux element interaction.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">Design and mockup of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
