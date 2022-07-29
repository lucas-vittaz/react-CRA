import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
  const categories = plantList.reduce((acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
  return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='plant-list'>
        {plantList.map((plant) => (
          <li key={ plant.id } className='plant-item'>
            {plant.name}
            {plant.isBestSale && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="sales">SOLDES</div>}
          </li>
        ))}
			</ul>
		</div>
	)
}

export default ShoppingList
