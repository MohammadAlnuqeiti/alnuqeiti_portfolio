import { backendLeft , backendRight } from "./data";

const Backend = () => {
    return (
        <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
        <div className="skills__group" >
                    {backendLeft.map((b , index) => {
                        return(
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">{b.name}</h3>
                                    {/* <span className="skills__level">Basic</span> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="skills__group" >
                    {backendRight.map((b,index) => {
                        return (
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">{b.name}</h3>
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

export default Backend;
