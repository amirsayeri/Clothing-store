import "./home.css";
import img1 from "../../../../public/ghaleb/banner-01.jpg";
import img2 from "../../../../public/ghaleb/banner-02.jpg";
import img3 from "../../../../public/ghaleb/banner-03.jpg";
import Products from "../products/Products.jsx";

const Home = () => {
  const sum = () => {
    window.location.replace("/Products");
  };

  return (
    <>
      <div className="baner">
        <div className="boxtext">
          <h2 className="cover_h2">مجموعه محصولات جدید و متنوع</h2>
          <h3 className="cover_h3">زنانه و مردانه</h3>
          <button className="cover_btn" onClick={sum}>
            مشاهده تمام محصولات
          </button>
        </div>
      </div>

      <div className="Selection">
        <div className="imgSelection">
          <img src={img1} alt="img" />
        </div>
        <div className="imgSelection">
          <img src={img3} alt="img" />
        </div>
        <div className="imgSelection">
          <img src={img2} alt="img" />
        </div>
      </div>

      <div className="brands">
        <img src="../../../../public/ghaleb/brands.jpg" alt="brands" />
      </div>

      <div className="div_Product">
        <div className="div_filter">
          <h2 className="h2_Product">محصول مورد نظر خود را پیدا کنید</h2>
        </div>
        <Products />
      </div>

      <div className="parallax">
        <div className="textParallax">
          <h2>کالکشن های فصل</h2>
          <p>
            محصولات مناسب فصل زمستان (انواع کاپشن های بادی) برای مشاهد و خرید
            کلیک کنید
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
