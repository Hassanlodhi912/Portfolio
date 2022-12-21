import "./Skills.css";
import Slider from '@mui/material/Slider';
import { Typography, } from "@mui/material";

const Skills = () => {
    return (
        <div className="Skills" id="Skills" >
            <div className="span" >
                <span>Main Skills</span>
                <span>Professional Skills</span>
            </div>

            <div className="Slider">
                <div className="hassan">
                    <div className="sliderLine" style={{ width: "180px" }}>
                        <div className="SliderLineElment">
                            <Typography gutterBottom>HTML & CSS</Typography>
                            <Slider disabled defaultValue={90} aria-label="Disabled slider" />
                        </div>
                        <div className="SliderLineElment">
                            <Typography gutterBottom>JAVACRIPT & ES6</Typography>
                            <Slider disabled defaultValue={85} aria-label="Disabled slider" />
                        </div>
                        <div className="SliderLineElment">
                            <Typography gutterBottom >REACT JS</Typography>
                            <Slider disabled defaultValue={80} aria-label="Disabled slider" />
                        </div>
                    </div>
                    <div className="sliderLine" >
                        <div className="SliderLineElment">
                            <Typography gutterBottom> REACT NATIVE </Typography>
                            <Slider disabled defaultValue={75} aria-label="Disabled slider" />
                        </div>
        
                    </div>
                </div>
                <div className="sliderLine" style={{ width: "180px" }}>
                <div className="SliderLineElment">
                    <Typography gutterBottom>REDUX</Typography>
                    <Slider disabled defaultValue={85} aria-label="Disabled slider" />
                </div>
                    <div className="SliderLineElment">
                        <Typography gutterBottom>FIREBASE</Typography>
                        <Slider disabled defaultValue={60} aria-label="Disabled slider" />
                    </div>
                    <div className="SliderLineElment">
                        <Typography gutterBottom>FIGMA</Typography>
                        <Slider disabled defaultValue={80} aria-label="Disabled slider" />
                    </div>
                    <div className="SliderLineElment">
                        <Typography gutterBottom>FLUTTER</Typography>
                        <Slider disabled defaultValue={50} aria-label="Disabled slider" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;
