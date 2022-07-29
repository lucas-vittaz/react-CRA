function Cart() {
  const monsteraPrice = 8
  const lierrePrice = 10
  const fleursPrice = 15
  return (<div>
    <h2>Mon Panier</h2>
    <ul>
      <li>Monstera : {monsteraPrice}</li>
      <li>Lierre : {lierrePrice}</li>
      <li>Fleurs : {fleursPrice}</li>
    </ul>
    <div>Total : { monsteraPrice + lierrePrice + fleursPrice} Euros</div>
  </div>)
}

export default Cart
