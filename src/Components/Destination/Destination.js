import './Destination.css';
import Moon from '../../assets/destination/image-moon.png';
import Mars from '../../assets/destination/image-mars.png';
import Europa from '../../assets/destination/image-europa.png';
import Titan from '../../assets/destination/image-titan.png';
import { useState, useEffect } from 'react';
import { Planet } from './Planet';
import { PlanetSelector } from './PlanetSelector';
import { PlanetInfo } from './PlanetInfo';
import { useParams } from 'react-router-dom';

const planets = {    //List of planet's information
    moon: {
        name: 'MOON',
        describe:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:'384,400 KM',
        time:'3 DAYS',
        img: Moon
    },
    mars: {
        name: 'MARS',
        describe:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:'225 MIL. KM',
        time:'9 MONTHS',
        img: Mars
    },
    europa: {
        name: 'EUROPA',
        describe:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:'628 MIL. KM',
        time:'3 YEARS',
        img: Europa
    },
    titan: {
        name: 'TITAN',
        describe:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:'1.6 BIL. KM',
        time:'7 YEARS',
        img: Titan
    }
}

export function Destination(){
    const { planetname } = useParams();
    const [planet, setPlanet] = useState(planets.moon);

    useEffect(() => {
        setPlanet(planets[planetname]);
    }, [planetname]);

    return (
        <div className="mainContent">
            <h2><span className='hightLightNum'>01</span>  PICK YOUR DESTINATION</h2>
            <div className="desContainer">
                <div className='leftDes'>
                    <Planet planet={planet}/>
                </div>
                <div className='rightDes'>
                    <PlanetSelector />
                    <PlanetInfo planet={planet}/>
                </div>
            </div>
        </div>
    )
}