import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType}) {
  const scaleType = careType === 'light' ? (<img src={Sun} alt="sun-icon"/>) : (<img src={Water} alt="water-icon" />)
  const range = [1,2,3]
  return (
    <div>
      {range.map((rangeElt) =>
        scaleValue >= rangeElt ? <span key={rangeElt.toString()}>{scaleType}</span> : null
      )}

    </div>
  )
}

export default CareScale
