import { IconContext } from "react-icons";
import { BsThreeDotsVertical,BsChatLeftText } from "react-icons/bs";
import { BiDislike } from "react-icons/bi";
import { AiOutlineMail,AiOutlinePlus } from "react-icons/ai";
const Component = () => {

    const num = 7;
    const style = { color: "red"}
    return ( 
        <div className="container">
            <div className="main-card">
                <div className="user-info">
                    <div className="user-header">
                        <div>
                            <input className="check-size" type="checkbox"/>
                        </div>
                        <div>
                            <h2>Vybhav</h2>
                            <small id="user-role">Application Developer</small>
                        </div>
                    </div>
                    <hr />
                    <div className="user-midsection">
                        <div className="user-score">
                                <p>Candidate Calibration Score</p>
                                <div className="user-scorebar">
                                    <p id="user-percent">84.0%</p>
                                    <div className="user-progress">
                                        <div className="progress" id="progress"></div>
                                    </div>
                                </div>
                        </div>
                        <div className="user-tags">
                            <button className="btn">Add tag +</button>
                            <button className="btn btn-active">Web Dev...</button>
                        </div>
                    </div>
                    <hr />
                    <div className="user-footer">
                        <small>2 activities since last visit</small>
                        <small>Uploaded <span id="uploaded">{num} days ago</span></small>
                    </div>
                </div>
                <div className="user-icons">
                        {/* IconContext not working */}
                        {/* <IconContext.Provider value={{ color: 'blue'}}>
                            <BsThreeDotsVertical/>
                        </IconContext.Provider> */}
                        <BsThreeDotsVertical/>
                        <BsChatLeftText/>
                        <AiOutlineMail/>
                        <BiDislike/>
                </div>
            </div>
        </div>
     );
}
 
export default Component;