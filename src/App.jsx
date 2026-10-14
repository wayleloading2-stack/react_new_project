import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='header'>
        <div className='logotype'>
          <img src="burger.png" alt="меню" className='menu_icon blue' />
          <h3 className='logo_text blue_text'>MegaMart</h3>
        </div>

        <div className='search'>
          
          <img src="lupa.png" alt="лупа" className='menu_icon'/>
          <input className='search_input' type="search" placeholder='Search essentials, groceries and more...'/>
          <img src="burger.png" alt="меню" className='menu_icon'/>
        </div>

        <div className='navigation'>
          <div className='logIn'>
            <img src="user.png" alt="профиль" className='menu_icon'/>
            <p>Sign Up/Sign In</p>
          </div>
            <div className='shop'>
            <img src="shop.png" alt="корзина" className='menu_icon'/>
            <p>Cart</p>
          <p></p>
          </div>
        </div>
      </section>

      <section id='hero'>
        <div className='drop_lists'>
          <select className="drop_list active" name="select" id="selected">
            <option value="">Groceries</option>
            <option value="1">select 1</option>
            <option value="2">select 2</option>
            <option value="3">select 3</option>
          </select>

          <select className="drop_list" name="select" id="selected">
            <option value="">Groceries</option>
            <option value="1">select 1</option>
            <option value="2">select 2</option>
            <option value="3">select 3</option>
          </select>

          <select className="drop_list" name="select" id="selected">
            <option value="">Groceries</option>
            <option value="1">select 1</option>
            <option value="2">select 2</option>
            <option value="3">select 3</option>
          </select>

          <select className="drop_list" name="select" id="selected">
            <option value="">Groceries</option>
            <option value="1">select 1</option>
            <option value="2">select 2</option>
            <option value="3">select 3</option>
          </select>
        </div>
          
      </section>
    </>
  )
}

export default App
