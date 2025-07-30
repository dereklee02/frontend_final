const testimonials = [
    {
        name: "Megan",
        rating: "5",
        details: "Absolutely love love loved the dessert!",
        img: "/lemon dessert.jpg"
    },
    {
        name: "Jared",
        rating: "4",
        details: "Bruchetta was pretty good even though I don't normally like this food",
        img: "/bruchetta.svg"
    },
    {
        name: "Bruce",
        rating: "5",
        details: "Greek salad goes crazy!!!",
        img: "/greek salad.jpg"
    },
    {
        name: "Bun (cat)",
        rating: "5",
        details: "meow meow meow purrrr",
        img: "/bruchetta.svg"
    }
]

const CustomersSay = () => {
    return (
        <>
            <div id="testimonialField">
                <h1>Testimonials</h1>
                <div id="testimonialContainer">
                    {testimonials.map((says) => (
                        <div class="card2">
                            <div class="card2content">
                                <h1>{says.rating} ⭐</h1>
                                <container class="row">
                                    <img src={says.img}/>
                                    <h3>{says.name}</h3>
                                </container>
                            <p>"{says.details}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CustomersSay;