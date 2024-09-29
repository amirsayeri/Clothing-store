import { useState } from "react";
import { useParams } from "react-router-dom";
import ProData from "../../../ProData";
import "./productDetail.css"
import imgStar from "../../../../public/ghaleb/star.png"

const ProductDetail = () => {

    const [ data , setData ] = useState(ProData)
    const Param = useParams()

    const productInfo = data.find( (item) => item.id == Param.id )

    const [ numberBuy , setNumberBuy ] = useState(0)

    const incrimentBuy = () => {
        if(numberBuy < 10 ) {
            setNumberBuy(prev => prev + 1)
        }
    }
    const lowBuy = () => {
        if(numberBuy > 0 ) {
            setNumberBuy(prev => prev - 1)
        }
    }

    return (
        <div className="Detile_div">
            <div className="Detile_Product">
                <div className="Detile_right">
                    <img src={productInfo.img} alt="img"className="Detile_img" />
                </div>
                <div className="Detile_left">
                    <h3 className="detile_title">{productInfo.title}</h3> 
                    <img src={imgStar} alt="star" className="imgstar" />
                    <img src={imgStar} alt="star" className="imgstar" />
                    <img src={imgStar} alt="star" className="imgstar" />
                    <img src={imgStar} alt="star" className="imgstar" />
                    <img src={imgStar} alt="star" className="imgstar" />
                    <h3 className="detile_price">{productInfo.price}</h3>
                    <p className="detile_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id esse nulla quasi, nemo dicta aut facilis saepe inventore? Tempora?</p>
                    <div className="detile_buy">
                       <button className="detile_btn" onClick={incrimentBuy}>Add</button>
                       <h3 className="detile_number">{numberBuy}</h3>
                       <button className="detile_btn" onClick={lowBuy}>Low</button>
                    </div>
                    <ul>
                        <li className="detile_vejegi">different colors</li>
                        <li className="detile_vejegi">different sizes</li>
                        <li className="detile_vejegi">possibility of changing the size</li>
                        <li className="detile_vejegi">High Quality</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail