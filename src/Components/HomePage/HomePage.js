import './HomePage.css';
import { Link } from 'react-router-dom';

const disapearedSlowly = ({target}) => {
    target.style.animation = 'shadowPersish 250ms ease';
}

const apearedSlowly =({target}) => {
    target.style.animation = 'shadowSpread 500ms ease forwards';
}

export function HomePage() {    
    return (
        <div className='mainContent homePageMain'>
            <div className='leftHome'>
                <h2 className='lightBlue'>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='rightHome'>
                <Link to='/destination' onMouseOver={apearedSlowly} onMouseOut={disapearedSlowly} className='bellefair'>Explore</Link>
            </div>
        </div>
    )
}