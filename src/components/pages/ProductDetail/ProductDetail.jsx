import { useState } from "react";
import { useParams } from "react-router-dom";
import ProData from "../../../ProData";
import "./productDetail.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductDetail = () => {
  const [data, setData] = useState(ProData);
  const Param = useParams();

  const productInfo = data.find((item) => item.id == Param.id);

  const [numberBuy, setNumberBuy] = useState(0);

  const incrimentBuy = () => {
    if (numberBuy < 10) {
      setNumberBuy((prev) => prev + 1);
    } else if (numberBuy >= 10) {
      alert("تعداد مورد نظر بیش از حد سفارش است");
    }
  };

  return (
    <div className="Detile_div">
      <div className="Detile_Product">
        <div className="Detile_right">
          <img src={productInfo.img} alt="img" className="Detile_img" />
        </div>
        <div className="Detile_left">
          <h3 className="detile_title">{productInfo.title}</h3>
          <div className="boxPartTwo">
            <div className="imgstars">
              <FaStarHalfAlt />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className="detile_price">{productInfo.price}تومان</h3>
          </div>
          <hr />
          <div className="colors">
            <h4>رنگبندی: </h4>
            <label className="container">
              مشکی
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              سفید
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              قهوه ای
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              سرمه ایی
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="size">
            <h4>سایز: </h4>
            <label className="container">
              M
              <input type="radio" name="radios" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              L
              <input type="radio" name="radios" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              XL
              <input type="radio" name="radios" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              2XL
              <input type="radio" name="radios" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="detile_buy">
            <p className="detile_number">تعداد: {numberBuy}</p>
            <button onClick={incrimentBuy}>افزودن به سبد خرید</button>
          </div>
          <div className="discriptionProduct">
            <h5>توضیحات محصول</h5>
            <p className="detile_text">
              در بازار پوشاک، برندهای متعددی وجود دارند که تی شرت‌های با کیفیت و
              متنوعی تولید می‌کنند. از بهترین برندهای تی شرت مردانه میتوان به
              نایک، آدیداس، پوما، ریباک، و زارا اشاره کرد. برند نایک به خاطر
              تولید تی شرت‌های اسپرت با کیفیت و طراحی‌های منحصر به فرد شهرت
              دارد. آدیداس نیز با تولید تی شرت‌های ورزشی و استفاده از جنس‌های
              تنفس‌پذیر و مقاوم، یکی از بهترین انتخاب‌ها برای ورزشکاران است.
              پوما و ریباک نیز با تولید تی شرت‌های اسپرت و طراحی‌های جذاب،
              محبوبیت زیادی دارند. زارا به عنوان یک برند مد و پوشاک، تی شرت‌هایی
              با طراحی‌های شیک و مدرن ارائه می‌دهد که مناسب برای استفاده در
              موقعیت‌های مختلف هستند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
