import React, { useState } from 'react';
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)}
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div onClick={() => toggleTab(2)}
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BSCS</h3>
                                <span className="qualification__subtitle">
                                    PMAS Arid Agriculture University
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        &nbsp; 2020 - Present
                                    </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">FSc Pre Engineering</h3>
                                <span className="qualification__subtitle">
                                    Steps College
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        &nbsp; 2020
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Matriculation</h3>
                                <span className="qualification__subtitle">
                                    Al Huda High School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        &nbsp; 2018
                                    </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Quality Assurance Engineer Intern</h3>
                                <span className="qualification__subtitle">
                                    MAG Dynamics
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        &nbsp; Sept 2023 - Present
                                    </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Freelancing</h3>
                                <span className="qualification__subtitle">
                                    fiverr
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        &nbsp; 2020 - Present
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Responsive Web Design</h3>
                                <span className="qualification__subtitle">
                                    freeCodeCamp
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        &nbsp; 2022
                                    </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification


