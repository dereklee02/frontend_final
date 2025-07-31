import { BrowserRouter, Route, Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className='FooterSection'>
                <ul>
                    <li><img src="/LittleLemonLogo1.png" width="100px"/></li>
                </ul>
                <ul>
                        <h3>Doormat Navigation</h3>
                        <a href="/#home">Home</a>
                        <a href="/#about">About</a>
                        <a href="/#Menu">Menu</a><Link to="/booking">Reservations</Link>
                        <a href="/#order-online">Order Online</a>
                        <a href="/#login">Login</a>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <text>Address: xyz</text>
                    <text>Phone Number: 123</text>
                    <text>Email: a@a.com</text>
                </ul>
                <ul>
                    <li><h3>Social Media Links</h3></li>
                    <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                    <li><a href="https://facebook.com">Facebook</a></li>
                </ul>
            </section>
        </>
    );
}

export default Footer;