import { useSelector } from "react-redux";
import "./Experience.css";
const Experience = () => {
  const darkMode = useSelector((state)=>state.toggleReducer.darkMode)
  return (
    <div className="experience" id="Experience">
    <div className="Acheivement">
        <div className="circle" style={{backgroundColor: darkMode? "black" : "white"}}>+8</div>
        <span> Year</span>
        <span> Experience</span>
    </div>
    <div className="Acheivement">
        <div className="circle" style={{backgroundColor: darkMode? "black" : "white"}}>+20</div>
        <span> Completed</span>
        <span> Project</span>
</div>
<div className="Acheivement">
        <div className="circle" style={{backgroundColor: darkMode? "black" : "white"}}>+5</div>
        <span> Companies</span>
        <span> work</span>
        </div>
    </div>
    
  )
}

export default Experience;
