import './Tech.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TechImg } from './TechImg';
import { TechSelector } from './TechSelector';
import { TechInfo } from './TechInfo';
import VehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import CapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import SpacePortPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import VehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import CapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import SpacePortLandscape from '../../assets/technology/image-spaceport-landscape.jpg';



const techs = {
    vehicle: {
        name: 'LAUNCH VEHICLE',
        describe: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imgPortrait: VehiclePortrait,
        imgLandscape: VehicleLandscape
    },
    space_port: {
        name: 'SPACE PORT',
        describe: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imgPortrait: SpacePortPortrait,
        imgLandscape: SpacePortLandscape
    },
    capsule: {
        name: 'SPACE CAPSULE',
        describe: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imgPortrait: CapsulePortrait,
        imgLandscape: CapsuleLandscape
    }
}

export function Tech(){
    const { recenttech } = useParams();
    const [tech, setTech] = useState(techs.vehicle);
    
    useEffect(() => {
        setTech(techs[recenttech])
    }, [recenttech])

    return (
        <div className="mainContent techContent">
            <h2><span className='highLightNum'>03</span>  SPACE LAUNCH 101</h2>
            <div className="techContainer">
                <div className="leftTech">
                    <TechSelector />
                    <TechInfo tech={tech}/>
                </div>
                <div className="rightTech">
                    <TechImg tech={tech}/>
                </div>
            </div>
        </div>
    )
}