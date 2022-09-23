import "./Skills.css";
import Slider from '@mui/material/Slider';
import { Typography, Box } from "@mui/material";

const Skills = () => {
    return (
        <div className="Skills" id="Skills" >
            <div className="span" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <span>Main Skills</span>
                <span>Professional Skills</span>
            </div>

            <div className="Slider">
                <div className="sliderLine" style={{width:"180px"}}>
                    <div className="SliderLineElment">

                        <Box sx={{ m: 3 }} />
                        <Typography gutterBottom>HTML</Typography>
                        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                    </div>
                    <div className="SliderLineElment">

                        <Box sx={{ m: 3 }} />
                        <Typography gutterBottom>CSS</Typography>
                        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                    </div>
                    <div className="SliderLineElment">

                        <Box sx={{ m: 3}} />
                        <Typography gutterBottom>JAVASCRIPT</Typography>
                        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                    </div>
                </div>
            <div className="sliderLine" style={{width:"180px"}}>
                <div className="SliderLineElment">

                    <Box sx={{ m: 3 }} />
                    <Typography gutterBottom> REACT JS</Typography>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </div>
                <div className="SliderLineElment">

                    <Box sx={{ m: 3 }} />
                    <Typography gutterBottom>REACT REDUX</Typography>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </div>
                <div className="SliderLineElment">

                    <Box sx={{ m: 3 }} />
                    <Typography gutterBottom>REACT NATIVE</Typography>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </div>
            </div>

            <div className="sliderLine" style={{width:"180px"}}>
                <div className="SliderLineElment">

                    <Box sx={{ m: 3 }} />
                    <Typography gutterBottom>FIREBASE</Typography>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </div>
                <div className="SliderLineElment">

                    <Box sx={{ m: 3 }} />
                    <Typography gutterBottom>FIGMA</Typography>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </div>
                <div className="SliderLineElment">

                    <Box sx={{ m: 3 }} />
                    <Typography gutterBottom>FLUTTER</Typography>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </div>
            </div>

            </div>
        </div>

    )
}

export default Skills;
