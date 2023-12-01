import { useCartContext } from "../context/CartContext";


const ProductHomeButton = ({product}) => {
    const {dispatch} = useCartContext();
    const { state: {cart}} = useCartContext();



    const addToCart = () => {
        dispatch({type: "ADD_TO_CART", payload: product})
        alert("Producto añadido al carrito")
    }

    const removeFromCart = () => {
        dispatch({type: "REMOVE_FROM_CART", payload: product.id})
        alert("Producto eliminado del carrito")
    }

    return (
         cart.some(el => el.id == product.id) ?
           
           <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
           onClick={removeFromCart}>
           Eliminar del carrito </button> 
       :  
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={addToCart}>
         Añadir al carrito </button>  
           
  )
}

export default ProductHomeButton;