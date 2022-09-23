import "./Toggle.css"
import { setToggle } from "../../store/action/Index";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch ,useSelector} from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
const Toggle = () => {
    const dispatch =useDispatch();
    const darkMode = useSelector((state)=>state.toggleReducer.darkMode)
const handleClick = ()=>{
    dispatch(setToggle())
}
    return (

        <div className="toggle" onClick={handleClick}>
            <LightModeIcon  />
            <DarkModeIcon />     
            <CircleIcon  style={darkMode?{left:"2px"}:{right:"2px"}}/>
        </div>
        
        
    )
}

export default Toggle
