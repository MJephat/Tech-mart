import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Cart from './Cart';


function ElectronicsList(){
    const [electronics, setElectronics] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState({ count: 0, items: [] });
    useEffect(() => {
        fetch("https://t-mart-data.onrender.com/electronics")
          .then((response) => response.json())
          .then((data) => setElectronics(data))
          .catch((error) => console.log(error));
      }, []);
      const addToCart = (item) => {
        setCart((prevCart) => ({
            count: prevCart.count + 1,
            items: [...prevCart.items, item],
        }));
    };
    const viewCart = () => {
        alert(`Cart items: ${cart.items.map((item) => item.name).join(", ")}`);
    };
    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const filteredElectronics = electronics.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <h2> TechMart Electonics </h2>
            {filteredElectronics.map((item) => (
                <div key={item.id} className="electrons">
                    <h3>{item.name}</h3>
                    <img src={item.image_url} alt={`${item.name}'s avatar`} />
                    <p>Description: {item.description}</p>
                    <p>Price: {item.price_ksh}</p>
                    <p>Category: {item.category}</p>
                    <p>Condition: {item.condition}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
            <Cart cartItems={cart.items} onClick={viewCart} />
        </div>
    );
}
export default ElectronicsList;