import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [total, setTotal] = useState(0);
  const { state: {cart}} = useCartContext();

  useEffect(()=>{
      setTotal(
          cart.reduce((acc) => acc + 1, 0)
      )
  },[cart])
  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">FakeStore</h1>
        <Link to="/cart">Carrito  - Total de articulos: {total}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
