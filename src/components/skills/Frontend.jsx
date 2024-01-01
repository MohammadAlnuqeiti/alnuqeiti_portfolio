import { frontendLeft, frontendRight } from "./data";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
            
                <div className="skills__group" >
                    {frontendLeft.map((f , index) => {
                        return(
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">{f.name}</h3>
                                    {/* <span className="skills__level">Basic</span> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="skills__group" >
                    {frontendRight.map((f,index) => {
                        return (
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">{f.name}</h3>
                                    {/* <span className="skills__level">Basic</span> */}
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default Frontend;
