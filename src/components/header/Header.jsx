import "./header.css"
import { Link } from "react-router-dom"
import img2 from "../../../public/ghaleb/newLogo.png"
import img3 from "../../../public/ghaleb/cart.png"
import img4 from "../../../public/ghaleb/icon-menu.png"
import { useContext, useRef, useState } from "react"
import {changeNumber} from "../../App"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const {number} = useContext(changeNumber)
    const loginNaviget = useNavigate()

    const [ menuBurger , setMenuBurger ] = useState(true)
    const refData = useRef()

    const handelMenu = () => {
        setMenuBurger(!menuBurger)
        if(menuBurger) {
            refData.current.style.display= "block"
        }else{
            refData.current.style.display = "none"
        }
    }

    return (
        <div>
            <nav className="navbar">
                <Link to="/"><img src={img2} alt="logo" className="logo" /></Link>
                <ul className="menu">
                    <li><Link to="/" className="menu_item">خانه</Link></li>
                    <li><Link to="/products" className="menu_item">محصولات</Link></li>
                    <li><Link to="/about" className="menu_item">درباره ما</Link></li>
                    <li><Link to="/Contactus" className="menu_item">تماس با ما</Link></li>
                </ul>
                <div className="right_menu">
                    <div className="box_login" onClick={ () => loginNaviget("/login")}>
                        <p>ورود | ثبت نام</p>
                        <img src="https://img.icons8.com/fluency-systems-regular/48/import.png" alt="import" className="login" />
                    </div>
                    <img src={img3} alt="sabad" className="sabad"/>
                    <p className="number_sabad">{number}</p>
                </div>

                <div className="menu_container">
                    <img src={img4} alt="icon-menu" className="icon_menu" onClick={handelMenu}/>
                    <ul className="menu_Burger" ref={refData}>
                      <li><Link to="/" className="menu_Item_Burger">خانه</Link></li>
                      <li><Link to="/products" className="menu_Item_Burger">محصولات</Link></li>
                      <li><Link to="/about" className="menu_Item_Burger">درباره ما</Link></li>
                      <li><Link to="/Contactus" className="menu_Item_Burger">تماس با ما</Link></li>
                    </ul>
                </div>

            </nav>

        </div>
    )
}

export default Header 
