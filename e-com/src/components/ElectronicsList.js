import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Cart from './Cart';
import CategoryFilter from './Category';

function ElectronicsList() {
  const [electronics, setElectronics] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState({ count: 0, items: [] });

  useEffect(() => {
    fetch('https://t-mart-data.onrender.com/electronics')
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
    alert(`Cart items: ${cart.items.map((item) => item.name).join(', ')}`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const removeItem = (item) => {
    setCart((prevCart) => ({
      count: prevCart.count - 1,
      items: prevCart.items.filter((cartItem) => cartItem.id !== item.id),
    }));
  };

  const categories = [...new Set(electronics.map((item) => item.category))];
  const filteredElectronics = electronics.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === '' || item.category === selectedCategory)
  );


  return (
    <div className='panga'>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <h2> TechMart Electronics </h2>
      {filteredElectronics.map((item) => (
        <div key={item.id} className="electrons">
          <h3>{item.name}</h3>
          <img src={item.image_url} alt={`${item.name}'s avatar`} />
          <p>Description: {item.description}</p><br></br>
          <p><b>Price</b>:Ksh {item.price_ksh}</p><br></br>
          <p><b>Category</b>: {item.category}</p>{" "}
          <p><b>Condition</b>: {item.condition}</p><br></br>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
      <Cart cartItems={cart.items} onClick={viewCart} onRemove={removeItem} />
    </div>
  );
}
export default ElectronicsList;

