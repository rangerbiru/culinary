// import React from 'react'

const Header = () => {
  return (
    <header className="flex px-20 py-8 items-center bg-green-300">
      <div className="flex items-center gap-1">
        <img
          src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
          alt="logo"
          className="w-12"
        />
        <h2>FoodKuu</h2>
      </div>

      <nav className="ml-auto">
        <ul className="flex gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menus</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
