const Nav = () => {
    return (
        <>
            <ul className='NavGroup'>
                <li className='NavList'><img src="/LittleLemonLogo2.png" alt="Logo" width="300px"/></li>
                <li className='NavList'><a href="/#home">Home</a></li>
                <li className='NavList'><a href="/#about">About</a></li>
                <li className='NavList'><a href="/#Menu">Menu</a></li>
                <li className='NavList'><a href="/#Reservations">Reservations</a></li>
                <li className='NavList'><a href="/#order-online">Order Online</a></li>
                <li className='NavList'><a href="/#login">Login</a></li>
            </ul>
        </>
    );
}

export default Nav;