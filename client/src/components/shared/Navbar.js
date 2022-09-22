import { Link } from 'react-router-dom';

const Navbar = () => (

    <nav>
        <h1>HANDY MANNY home repair co.</h1>
    <ul>
        {/* <li>Handy Manny</li> */}
        <Link to='/'>
            <li>Home</li>
        </Link>
        <Link to='/about'>
            <li>About</li>
        </Link>
        <Link to= '/workers'>
            <li>Get Started</li>
        </Link>
    </ul>
    </nav>
)

export default Navbar;