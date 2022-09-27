import './Crew.css';
import { useState, useEffect } from 'react';
import { CrewImg } from './CrewImg';
import { CrewInfo } from './CrewInfo';
import { CrewSelector } from './CrewSelector';
import Commander from '../../assets/crew/image-douglas-hurley.png';
import MissionSpecialist from '../../assets/crew/image-mark-shuttleworth.png';
import Pilot from '../../assets/crew/image-victor-glover.png'; 
import FlightEngineer from '../../assets/crew/image-anousheh-ansari.png';
import { useParams } from 'react-router-dom';


const crews = {
    commander: {
        job: 'COMMANDER',
        name: 'DOUGLAS HURLEY',
        describe: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: Commander
    },
    mission_specialist: {
        job: 'MISSION SPECIALIST',
        name: 'MARK SHUTTLEWORTH',
        describe: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        img: MissionSpecialist
    },
    pilot: {
        job: 'PILOT',
        name: 'VICTOR GLOVER',
        describe: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        img: Pilot
    },
    flight_engineer: {
        job: 'FLIGHT ENGINEER',
        name: 'ANOUSHEH ANSARI',
        describe: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        img: FlightEngineer
    }
}

export function Crew(){
    const { crewjob } = useParams();
    const [crew, setCrew] = useState(crews.commander);
    useEffect(() => {
        setCrew(crews[crewjob])
    },[crewjob])

    return (
        <div className='mainContent'>
            <h2><span className='highLightNum'>02</span>  MEET YOUR CREW</h2>
            <div className='crewContainer'>
                <div className='leftCrew'>
                    <CrewInfo crew={crew}/>
                    <CrewSelector />
                </div>
                <div className='rightCrew'>
                    <CrewImg crew={crew}/>
                </div>
            </div>
        </div>
    )
}