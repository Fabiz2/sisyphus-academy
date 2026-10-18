import logo from '../../assets/images/watermarked_img_11913277009319731599.png'
import "./Header.css"
import Nav from '../Nav/index'

export default function index() {
  return (
    <header>
        <img src={logo}/>
        <div className='barra'>
            <Nav/>
        </div>
    </header>
  )
}
