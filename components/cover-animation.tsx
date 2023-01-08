import Lottie from "lottie-react";
import {AnimationContainer} from "./cover-animation-elements";
import devAnimation from "../assets/dev.json"


const CoverAnimation = () => {
    return (
        <AnimationContainer>
            <Lottie animationData={devAnimation} loop={true}/>
        </AnimationContainer>
    )
}

export default CoverAnimation