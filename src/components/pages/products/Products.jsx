import ProData from "../../../ProData";
import { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { changeNumber } from "../../../App.jsx";

const Products = () => {
    
  const [data, setData] = useState(ProData);

  const { setNumber } = useContext(changeNumber);

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
    <div>
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
            placeholder="جست و جو ..."
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="search_btn" onClick={searchBtn}>
            جست و جو
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
              <div>
                <h3>{item.title}</h3>
                <p>{item.Description}</p>
              </div>
              <div className="div_tozih">
                <button
                  onClick={() => setNumber((prev) => prev + 1)}
                  className="btn"
                >
                  خرید
                </button>
                <p className="price">{item.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
