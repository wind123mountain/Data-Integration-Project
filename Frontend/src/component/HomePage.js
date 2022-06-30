import "./HomePage.css";
import products from "./data";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import React, {useState} from 'react'

export default function HomePage() {
  
  const categories = [
    "iphone",
    "samsung",
    "oppo",
    "xiaomi",
    "vivo",
    "realme",
    "nokia",
    "itel",
    "masstel",
  ];
  const [visible, setVisible] = useState(100)
  const LoadMore = () =>{
           setVisible((preValue) => preValue + 100);
  };
  const LoadLess = () =>{
    setVisible((preValue) => preValue - 100);
  };
  const navigate = useNavigate();
  return ( 

    <div>
     
      {categories.map((category, iC) => {
        return (
          <section key={iC}>
            <div className="title-phone">
              <h3>{category.toUpperCase()}</h3>
            </div>
            <div className="container-productbox">
              <ul className="list-product">
                {products.slice(0,visible)
                  .filter((v, i) => {
                    return v.name?.toLowerCase().includes(category);
                  })
                  .map((v, i) => {
                    return (
                      <li className="iteam_box">
                        <div className="main_box" onClick={() => navigate("/" + v.id)}>
                          <div className="item-img item-img_42">
                            <img
                              className=""
                              src={v.img}
                              width="207"
                              height="207"
                            ></img>
                          </div>
                          <h3>{v.name}</h3>
                          <strong className="price">Giá từ: {v.price}₫</strong>
                          <p className="item-where">
                            Có tất cả : {v.count} nơi bán
                          </p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <Button onClick={LoadMore}>Load More</Button>
            <Button onClick={LoadLess}>Collapse</Button>
          </section>
        );
      })}
    </div>
  );
}
