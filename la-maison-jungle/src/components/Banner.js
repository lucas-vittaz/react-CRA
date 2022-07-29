import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  const title = 'La maison jungle'
  return (
     <div className="banner">
    <img src={logo} alt='La maison jungle' className='logo' />
    <h1 className='title'>{title}</h1>
  </div>
  )
}

export default Banner
