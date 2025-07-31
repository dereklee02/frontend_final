import { BrowserRouter, Route, Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <ul className='NavGroup'>
                <li className='NavList'><Link to="/"><img src="/LittleLemonLogo2.png" alt="Logo" width="300px"/></Link></li>
                <li className='NavList'><Link to="/">Home</Link></li>
                <li className='NavList'><a href="/#about">About</a></li>
                <li className='NavList'><a href="/#Menu">Menu</a></li>
                <li className='NavList'><Link to="/booking">Reservations</Link></li>
                <li className='NavList'><a href="/#order-online">Order Online</a></li>
                <li className='NavList'><a href="/#login">Login</a></li>
            </ul>
        </>
    );
}

export default Nav;