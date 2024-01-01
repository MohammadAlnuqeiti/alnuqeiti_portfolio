import './projects.css';
import { projects } from './data';
import { tools } from './data';
import { useState } from 'react';
const Projects = () => {


    const [toggleState,setToggleState] = useState(0);


    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Recent Works</span>

            <div className="projects__container container grid">
{/* -------------- project 1 -------------- */}
                {projects.map((p , index) => {
                    return (
                        <div key={index}>
                            <div className="card_item">
                                <div className="card_img">
                                    <a href={p.link} target='_blank' rel="noopener noreferrer">
                                    <img src={p.image} alt="" />
                                    </a>
                                </div>
                                <div className='tools_content'>
                                {
                                    (() => {
                                    const array = p.tools.split(",");
                                    return tools
                                    .filter(t => array.includes(t.id.toString()))
                                    .map(t => <span className="stack-btn" key={t.id} style={{backgroundColor: t.color}}>{t.name}</span>);
                                    })()
                                }

                                </div>
                                <div className="card_text">
                                    <h3 className="projects__title">
                                        {p.name}
                                    </h3>
                                    <p className='projects_description'>
                                        {p.short_description}
                                    </p>
                                    <div className='links_project'>
                                        <span>
                                            <a href={p.link} target='_blank' rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        </span>
                                        <span className="projects__button" onClick={() => toggleTab(p.id)}>
                                            View More
                                            <i className="uil uil-arrow-right projects__button-icon"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState === p.id ? "projects__model active-model" : "projects__model"}>
                                <div className="projects__model-content">
                                    <i className="uil uil-times projects__model-close" onClick={() => toggleTab(0)}></i>

                                    <h3 className="projects__model-title">
                                    {p.name}
                                    </h3>
                                    <p className="projects__model-description">
                                        {p.long_description}
                                    </p>

                                    {/* <ul className="projects__model-projects grid">

                                        <li className="projects__model-project">
                                            <i className="uil uil-check-circle projects__model-icon"></i>

                                            <p className="projects__model-info">
                                                1. Lorem ipsum dolor sit amet.
                                            </p>
                                        </li>

                                        <li className="projects__model-project">
                                            <i className="uil uil-check-circle projects__model-icon"></i>

                                            <p className="projects__model-info">
                                                2. Lorem ipsum dolor sit amet.
                                            </p>
                                        </li>

                                        <li className="projects__model-project">
                                            <i className="uil uil-check-circle projects__model-icon"></i>

                                            <p className="projects__model-info">
                                                3. Lorem ipsum dolor sit amet.
                                            </p>
                                        </li>

                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    )
                })}

{/* -------------- project 2 -------------- */}
                {/* <div>
                    <div className="card_item">
                            <div className="card_img">
                                <a href="#">
                                <img src={ImaGE} alt="" />
                                </a>
                            </div>
                            <div className='tools_content'>
                                <span className="stack-btn" style={{backgroundColor:"#F05340"}}>Laravel</span>
                                <span className="stack-btn" style={{backgroundColor:"yellow"}}>PHP</span>
                            </div>
                            <div className="card_text">
                                <h3 className="projects__title">
                                    Elegant Light Box Paper
                                </h3>
                                <p className='projects_description'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, ipsum.
                                </p>
                                <div className='links_project'>
                                    <span>
                                        <a href='https://github.com/MohammadAlnuqeiti/Portfolio' target='_blank' rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </span>
                                    <span className="projects__button" onClick={() => toggleTab(2)}>
                                        View More
                                        <i className="uil uil-arrow-right projects__button-icon"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    <div className={toggleState === 2 ? "projects__model active-model" : "projects__model"}>
                        <div className="projects__model-content">
                            <i className="uil uil-times projects__model-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="projects__model-title">
                            Ui/Ux Designer
                            </h3>
                            <p className="projects__model-description">
                                2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, reiciendis!
                            </p>

                            <ul className="projects__model-projects grid">

                                <li className="projects__model-project">
                                    <i className="uil uil-check-circle projects__model-icon"></i>

                                    <p className="projects__model-info">
                                        1. Lorem ipsum dolor sit amet.
                                    </p>
                                </li>

                                <li className="projects__model-project">
                                    <i className="uil uil-check-circle projects__model-icon"></i>

                                    <p className="projects__model-info">
                                        2. Lorem ipsum dolor sit amet.
                                    </p>
                                </li>

                                <li className="projects__model-project">
                                    <i className="uil uil-check-circle projects__model-icon"></i>

                                    <p className="projects__model-info">
                                        3. Lorem ipsum dolor sit amet.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div> */}
{/* -------------- project 3 -------------- */}
                {/* <div>
                    <div className="card_item">
                            <div className="card_img">
                                <a href="#">
                                <img src={ImaGE} alt="" />
                                </a>
                            </div>
                            <div className='tools_content'>
                                <span className="stack-btn" style={{backgroundColor:"#F05340"}}>Laravel</span>
                                <span className="stack-btn" style={{backgroundColor:"yellow"}}>PHP</span>
                            </div>
                            <div className="card_text">
                                <h3 className="projects__title">
                                    Elegant Light Box Paper
                                </h3>
                                <p className='projects_description'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, ipsum.
                                </p>
                                <div className='links_project'>
                                    <span>
                                        <a href='https://github.com/MohammadAlnuqeiti/Portfolio' target='_blank' rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </span>
                                    <span className="projects__button" onClick={() => toggleTab(3)}>
                                        View More
                                        <i className="uil uil-arrow-right projects__button-icon"></i>
                                    </span>
                                </div>

                            </div>
                        </div>

                    <div className={toggleState === 3 ? "projects__model active-model" : "projects__model"}>
                        <div className="projects__model-content">
                            <i className="uil uil-times projects__model-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="projects__model-title">
                                Visual Designer
                            </h3>
                            <p className="projects__model-description">
                                3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, reiciendis!
                            </p>

                            <ul className="projects__model-projects grid">

                                <li className="projects__model-project">
                                    <i className="uil uil-check-circle projects__model-icon"></i>

                                    <p className="projects__model-info">
                                        1. Lorem ipsum dolor sit amet.
                                    </p>
                                </li>

                                <li className="projects__model-project">
                                    <i className="uil uil-check-circle projects__model-icon"></i>

                                    <p className="projects__model-info">
                                        2. Lorem ipsum dolor sit amet.
                                    </p>
                                </li>

                                <li className="projects__model-project">
                                    <i className="uil uil-check-circle projects__model-icon"></i>

                                    <p className="projects__model-info">
                                        3. Lorem ipsum dolor sit amet.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Projects;
