import ProData from "../../../ProData";
import { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(ProData);

  const [inputData, setInputData] = useState("");

  const filterBtn = (description) => {
    const filtering = ProData.filter((item) => item.Description == description);
    setData(filtering);
  };

  const searchBtn = () => {
    const filterSearch = ProData.filter((item) => item.title == inputData);
    setData(filterSearch);
  };

  return (
    <div className="bodyProduct">
      <div className="div_filtering">
        <div className="div_btn_filter">
          <button className="btn_Procards" onClick={() => setData(ProData)}>
            همه محصولات
          </button>
          <button className="btn_Procards" onClick={() => filterBtn("women")}>
            زنانه
          </button>
          <button className="btn_Procards" onClick={() => filterBtn("men")}>
            مردانه
          </button>
          <button
            className="btn_Procards"
            onClick={() => filterBtn("accessories")}
          >
            اکسسوری و زیورآلات
          </button>
        </div>
        <div>
          <input
            type="text"
            className="inputSearch"
            placeholder="..."
            onChange={(e) => setInputData(e.target.value)}
          />
          <button type="submit" className="search_btn" onClick={searchBtn}>
            جستجو
          </button>
        </div>
      </div>
      <div className="div_Products">
        {data.map((item) => {
          return (
            <Link to={`/product/${item.id}`} key={item.id} className="card">
              <div className="div_img">
                <img src={item.img} alt="mahsol" className="img" />
              </div>
              <div className="boxtitles">
                <p>{item.title}</p>
                <p>{item.Description}</p>
              </div>
              <div>
                <p className="price" dir="rtl">
                  {item.price}تومان
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
