import "./home.css";
import img1 from "../../../../public/ghaleb/banner-01.jpg";
import img2 from "../../../../public/ghaleb/banner-02.jpg";
import img3 from "../../../../public/ghaleb/banner-03.jpg";
import img4 from "../../../../public/ghaleb/model.jpg";
import Products from "../products/Products.jsx";

const Home = () => {
  const sum = () => {
    window.location.replace("/Products");
  };

  return (
    <>
      <div className="baner">
        <h2 className="cover_h2">مجموعه محصولات جدید و متنوع</h2>
        <h3 className="cover_h3">زنانه و مردانه</h3>
        <button className="cover_btn" onClick={sum}>
          مشاهده تمام محصولات
        </button>
      </div>

      <div className="Selection">
        <div className="div_selection">
          <h3 className="text_selection">زنانه</h3>
          <img src={img1} alt="img" className="img" />
          <p className="p_selection">
            Various new womens clothes <br /> Up-to-date models
          </p>
        </div>
        <div className="div_selection">
          <h3 className="text_selection">مردانه</h3>
          <img src={img2} alt="img2" className="img" />
          <p className="p_selection">
            The best mens clothes <br /> Click to view{" "}
          </p>
        </div>
        <div className="div_selection">
          <h3 className="text_selection">اکسسوری</h3>
          <img src={img3} alt="img3" className="img" />
          <p className="p_selection">
            The most beautiful new and old accessories <br /> In different
            colors
          </p>
        </div>
      </div>

      <div className="div_Product">
        <div className="div_filter">
          <h2 className="h2_Product">
            محصول مورد نظر خود را با گزینه های پیدا کنید
          </h2>
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
