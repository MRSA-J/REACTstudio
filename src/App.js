import "./App.css";
import {useState} from 'react';
import bakeryData from "./assets/bakery-data.json";
import Batem from "./components/BakeryItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});

/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    // initial cart value as zero
    const [cart, setCart] = useState([]);

    function handleClick(item) {
        setCart([...cart, item]);
    }

    return (
        <div className="APP">
            <div class="row">
                <div class="col-md-9">
                    <h1>Welcome to Our Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
                    {/* set each line has three columns */}
                    <div class="row">
                        {bakeryData.map((item, index) => (
                            <Batem
                                key={index}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <h2>Cart</h2>
                        {/* TODO: render a list of items in the cart */}
                        {(cart.length === 0) ? <h5>empty</h5> : <div>
                            <ul class="list-group">
                                {cart.map((item, index) => (
                                    <li class="list-group-item" key={index}>
                                        {item.name}  ${item.price}/each
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
