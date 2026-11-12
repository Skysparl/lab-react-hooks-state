import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div
      style={{
        background: darkMode ? '#222' : '#fff',
        color: darkMode ? '#f5f5f5' : '#222',
        minHeight: '100vh',
        padding: '1rem'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App