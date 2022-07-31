import '../styles/Cart.css'
import { useState } from 'react'


function Cart() {
  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)

  return (<div className="cart">
    <h2>Mon Panier</h2>
    <div>
      Monstera : {monsteraPrice}€
      <button onClick={() => updateCart(cart + 1)}>
        Ajouter
      </button>
    </div>
    <div>Total : { monsteraPrice * cart}€</div>
  </div>)
}

export default Cart
