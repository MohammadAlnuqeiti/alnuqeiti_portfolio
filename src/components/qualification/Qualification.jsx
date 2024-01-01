import React, { useState } from 'react';
import './qualification.css'
import { education } from './data';
import { experience } from './data';
const Qualification = () => {

    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => {toggleTab(1)}}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => {toggleTab(2)}}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {education.map((e , index) => {
                            return (
                                (index+1) % 2 !== 0 ?

                                    <div className="qualification__data" key={index}>
                                        <div>
                                            <h3 className="qualification__title">{e.enterprise}</h3>
                                            <h4 className="qualification__title">{e.specialization}</h4>
                                            <span className="span qualification__subtitle">
                                            {e.country} - {e.city}
                                            </span>
                                            <div className="qualification__calender">
                                                <i className="uil uil-calendar-alt"></i> {e.fromDate} - {e.toDate}
                                            </div>
                                        </div>
            
                                        <div>
                                            <span className="qualification__rounder">
            
                                            </span>
                                            <span className="qualification__line"></span>
                                        </div>
                                    </div>
                                
                                :

                                <div className="qualification__data" key={index}>
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder">

                                        </span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">{e.enterprise}</h3>
                                        <h4 className="qualification__title">{e.specialization}</h4>
                                        <span className="span qualification__subtitle">
                                        {e.country} - {e.city}
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> {e.fromDate} - {e.toDate}
                                        </div>
                                    </div>
                                </div>

                        )
                        })}
                                        
                    </div>

                        

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {experience.map((e , index) => {
                            return (
                                (index+1) % 2 !== 0 ?

                                    <div className="qualification__data" key={index}>
                                        <div>
                                            <h3 className="qualification__title">{e.position}</h3>
                                            <span className="span qualification__subtitle">
                                                {
                                                    (() => {
                                                        return (

                                                            e.city === "" ?    e.company  :  e.company + ' - ' + e.city  
                                                        )
                                                        
                                                    })()
                                                }
                                            </span>
                                            <div className="qualification__calender">
                                                <i className="uil uil-calendar-alt"></i> {e.fromDate} - {e.toDate}
                                            </div>
                                        </div>
            
                                        <div>
                                            <span className="qualification__rounder">
            
                                            </span>
                                            <span className="qualification__line"></span>
                                        </div>
                                    </div>
                                
                                :

                                <div className="qualification__data" key={index}>
                                    <div></div>
        
                                    <div>
                                        <span className="qualification__rounder">
        
                                        </span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">{e.position}</h3>
                                        <span className="span qualification__subtitle">
                                            {
                                                (() => {
                                                    return (

                                                        e.city === "" ?    e.company  :  e.company + ' - ' + e.city
                                                    )
                                                    
                                                })()
                                            }                                        
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> {e.fromDate} - {e.toDate}
                                        </div>
                                    </div>
                                </div>

                        )
                        })}


                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
