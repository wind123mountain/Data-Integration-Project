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

  const [totalIphone, setTotalIphone] = useState(10)
  const [totalSamsung, setTotalSamsung] = useState(10)
  const [totalOppo, setTotalOppo] = useState(10)
  const [totalXiaomi, setTotalXiaomi] = useState(10)
  const [totalVivo, setTotalVivo] = useState(10)
  const [totalRealme, setTotalRealme] = useState(10)
  const [totalNokia, setTotalNokia] = useState(10)
  const [totalItle, setTotalItle] = useState(10)
  const [totalMasstel, setTotalMasstel] = useState(10)
  const filterProduct = () => {
    let cateFormat = categories.map((cate, i) => {
      let obj = {}
      let count = 0
      obj[cate] = products.filter((pro, i) => {
        let iSameName = pro.name?.toLowerCase().includes(cate)
        if (iSameName) {
          ++count
        }

        if (cate === 'samsung') {
          return iSameName && count <= totalSamsung;
        }
        if (cate === 'oppo') {
          return iSameName && count <= totalOppo;
        }
        if (cate === 'xiaomi') {
          return iSameName && count <= totalXiaomi;
        }
        if (cate === 'vivo') {
          return iSameName && count <= totalVivo;
        }
        if (cate === 'realme') {
          return iSameName && count <= totalRealme;
        }
        if (cate === 'nokia') {
          return iSameName && count <= totalNokia;
        }
        if (cate === 'itel') {
          return iSameName && count <= totalItle;
        }
        if (cate === 'masstel') {
          return iSameName && count <= totalMasstel;
        }
        return iSameName && count <= totalIphone;
      })
      return obj
    })
    return cateFormat
  }

  const LoadMore = (category) => {
    let lengthProduct = products.filter(product => product.name?.toLowerCase().includes(category)).length
    if (category === 'samsung') {
      setTotalSamsung(
        totalSamsung + 10 > lengthProduct
          ? lengthProduct
          : totalSamsung + 10
      );
    }
    if (category === 'oppo') {
      setTotalOppo(
        totalOppo + 10 > lengthProduct
          ? lengthProduct
          : totalOppo + 10
      );
    }
    if (category === 'xiaomi') {
      setTotalXiaomi(
        totalXiaomi + 10 > lengthProduct
          ? lengthProduct
          : totalXiaomi + 10
      );
    }
    if (category === 'vivo') {
      setTotalVivo(
        totalVivo + 10 > lengthProduct
          ? lengthProduct
          : totalVivo + 10
      );
    }
    if (category === 'realme') {
      setTotalRealme(
        totalRealme + 10 > lengthProduct
          ? lengthProduct
          : totalRealme + 10
      );
    }
    if (category === 'nokia') {
      setTotalNokia(
        totalNokia + 10 > lengthProduct
          ? lengthProduct
          : totalNokia + 10
      );
    }
    if (category === 'itel') {
      setTotalItle(
        totalItle + 10 > lengthProduct
          ? lengthProduct
          : totalItle + 10
      );
    }
    if (category === 'masstel') {
      setTotalMasstel(
        totalMasstel + 10 > lengthProduct
          ? lengthProduct
          : totalMasstel + 10
      );
    }
    if (category === 'iphone') {
      setTotalIphone(
        totalIphone + 10 > lengthProduct
          ? lengthProduct
          : totalIphone + 10
      );
    }
  };

  const LoadLess = (category) =>{
    if (category === 'samsung') {
      setTotalSamsung(totalSamsung - 10 > 0 ? totalSamsung - 10 : 0);
    }
    if (category === 'oppo') {
      setTotalOppo(totalOppo - 10 > 0 ? totalOppo - 10 : 0);
    }
    if (category === 'xiaomi') {
      setTotalXiaomi(totalXiaomi - 10 > 0 ? totalXiaomi - 10 : 0);
    }
    if (category === 'vivo') {
      setTotalVivo(totalVivo - 10 > 0 ? totalVivo - 10 : 0);
    }
    if (category === 'realme') {
      setTotalRealme(totalRealme - 10 > 0 ? totalRealme - 10 : 0);
    }
    if (category === 'nokia') {
      setTotalNokia(totalNokia - 10 > 0 ? totalNokia - 10 : 0);
    }
    if (category === 'itel') {
      setTotalItle(totalItle - 10 > 0 ? totalItle - 10 : 0);
    }
    if (category === 'masstel') {
      setTotalMasstel(totalMasstel - 10 > 0 ? totalMasstel - 10 : 0);
    }
    if (category === 'iphone') {
      setTotalIphone(totalIphone - 10 > 0 ? totalIphone - 10 : 0)
    }
  };
  let dataOutput = filterProduct()
  const navigate = useNavigate();
  return (
    <div className="wrap-container">
      {
        dataOutput.map((category, key) => {
          return (
            <section key={key}>
              <div className="title-phone">
                <h3>ĐIỆN THOẠI {Object.keys(category)[0].toUpperCase()}</h3>
              </div>
              <div className="container-productbox">
                <ul className="list-product">
                  {
                    Object.values(category)[0].map((v, index) => {
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
                    })
                  }
                </ul>
              </div>
              <Button onClick={() => LoadMore(Object.keys(category)[0])}>Load More</Button>
              <Button onClick={() => LoadLess(Object.keys(category)[0])}>Collapse</Button>
            </section>
          )
        })
      }
    </div>
  );
}
