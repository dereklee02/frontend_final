import { BrowserRouter, Route, Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <>
            <div id='hero'>
                <div class="heroDetails">
                    <h1>Little Lemon</h1>
                    <h3 id='city'>Minneapolis</h3>
                    <p>Little Lemon Minneapolis is the latest and greatest branch of Little Lemon, and we're so excited to bring our business to a new area!</p>
                    <Link to="/booking"><button aria-label="On Click">Get a Table Now!</button></Link>
                </div>
                <img src="/restauranfood.jpg" width='400px' height='450px'/>
            </div>
        </>
    );
}

export default CallToAction;