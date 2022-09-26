import './Tech.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TechImg } from './TechImg';
import { TechSelector } from './TechSelector';
import { TechInfo } from './TechInfo';
import VehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
// import VehiclePotrait from '../../assets/technology/image-launch-vehicle-potrait.jpg';
import CapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
// import CapsulePotrait from '../../assets/technology/image-space-capsule-potrait.jpg';
import SpacePortLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
// import SpacePortPotrait from '../../assets/technology/image-spaceport-potrait.jpg';


const techs = {
    vehicle: {
        name: 'LAUNCH VEHICLE',
        describe: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        img: VehicleLandscape
    },
    space_port: {
        name: 'SPACE PORT',
        describe: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        img: SpacePortLandscape
    },
    capsule: {
        name: 'SPACE CAPSULE',
        describe: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        img: CapsuleLandscape
    }
}

export function Tech(){
    const { recenttech } = useParams();
    const [tech, setTech] = useState(techs.vehicle);
    
    useEffect(() => {
        setTech(techs[recenttech])
    }, [recenttech])

    return (
        <div className="mainContent">
            <h2><span className='hightLightNum'>03</span>  SPACE LAUNCH 101</h2>
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