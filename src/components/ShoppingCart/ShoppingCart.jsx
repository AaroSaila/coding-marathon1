import React, { useState } from "react";
import './ShoppingCart.css';
import Item from "./Item";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  function addItem() {
    if (newItem.itemName.trim() !== "" && newItem.quantity.trim() !== "") {
      setItems((i) => [...i, newItem]);
      setNewItem({ itemName: "", quantity: "" });
    }
  }

  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function handleIncrement(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: Number(item.quantity) + 1 } : item
      )
    );
  }

  function handleDecrement(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index && item.quantity > 0
          ? { ...item, quantity: Number(item.quantity) - 1 }
          : item
      )
    );
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="shopping-form">
        <label htmlFor='itemName'>Item name:</label>
        <input
          id="itemName"
          type="text"
          placeholder="Enter item name..."
          name="itemName"
          value={newItem.itemName}
          onChange={handleInputChange}
        />
        <label htmlFor='quantity'>Quantity:</label>
        <input
          id="quantity"
          type="number"
          placeholder="Enter quantity..."
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addItem}>Add Item</button>
      </div>
      <ol className="item-list">
        {items.map((item, index) => (
          <Item 
            key={index} 
            item={item} 
            index={index}
            onDelete={deleteItem}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;