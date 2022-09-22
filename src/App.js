import Router from "./config/Router"
import "./App.css"
import { useSelector } from "react-redux"
const App = () => {
  const darkMode = useSelector((state)=>state.toggleReducer.darkMode)
  
  return (
    <div style={{
      background: darkMode? "#2C2C29" : "",
        color:darkMode? "white": ""
        }}>
    <Router/>
    </div>
    )
}

export default App
