import './HomePage.js';
import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className='mainContent'>
            <div className='leftContent'>
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='rightContent'>
                <Link to='/destination'>Explore</Link>
            </div>
        </div>
    )
}