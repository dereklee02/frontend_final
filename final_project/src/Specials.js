const specialItems = [
    {
        name: "Greek Salad",
        price: "$12.80",
        description: "everybody loves greek salad",
        img: "/greek salad.jpg"
    },
    {
        name: "Bruchetta",
        price: "$7.90",
        description: "one of a kind dish",
        img: "/bruchetta.svg"
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: "perfect to round off the night!",
        img: "/lemon dessert.jpg"
    }
]

const Specials = () => {
    return (
        <>
            <container id="specialTop">
                <h2 id="specialText">This week's specials!</h2>
                <button>Online Menu</button>
            </container>
            <container id="specialContainer">
                {specialItems.map((item) => (
                    <div class="card">
                        <img src={item.img} width="400px" class="specialImage"/>
                            <div class="margin20">
                                <container id="specialNamePrice">
                                    <h2>{item.name}</h2>
                                    <h3>{item.price}</h3>
                                </container>
                                <p>{item.description}</p>
                                <h3>Order a Delivery</h3>
                            </div>
                    </div>
                ))}
            </container>
        </>
    );
}

export default Specials;