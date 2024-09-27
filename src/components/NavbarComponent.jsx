import React from "react";
import { NavLink } from "react-router-dom";
function NavbarComponent() {
    function handleLogout(){
        localStorage.removeItem('vite_user')
    }
  return (
    <div className="container mx-auto flex justify-between h-[120px] items-center">
      <h2 className="text-4xl font-bold">Logo</h2>
      <ul className="flex gap-6">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>

        {localStorage.hasOwnProperty("vite_user") ? (
          <li>
            <button onClick={handleLogout} >Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavbarComponent;
