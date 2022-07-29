function CareScale({ scaleValue, careType}) {
  const scaleType = careType === 'light'? '☀️' : '💧'
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
