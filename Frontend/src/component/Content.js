import React from "react";
import styled from "styled-components";
import { productObj } from "./data";

const Container = styled.div`
  width: 100%;
`;

const ListHead = styled.h2`
  font-weight: bold;
  margin: 10px 120px;
  background-color: tomato;
  font-family: "Times New Roman", Times, serif;
  width: 20%;
  text-align: center;
`;

const Item = styled.li`
  padding: 16px 0px;
  margin: 0px 120px;
  background-color: ${(props) => (props.pos % 2 === 0 ? "#E6E6FA" : "#fff")};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
`;
export default function Content({ index }) {

  const handleKey = (key) => {
    if (key.startsWith('The')){
      return "Thế giới di động";
    }else if (key.startsWith('Media')){
      return "Media Mart";
    }else if (key.startsWith('World')){
      return "World Phone";
    }else if (key.startsWith('Nguyen')){
      return "Nguyen Kim"
    }else{
      return key;
    }
  }

  const handlePrice = (key, price) => {
    if(key.startsWith('The')){
      return price.replace(".0", "");
    }else if (key.startsWith("World")){
      return price.replace("₫", '').replaceAll('.', '')
    }else{
      return price.replaceAll('.', '');
    }
  }

  return (
    <Container>
      <ListHead>So sánh giá của các nơi bán</ListHead>
      <ul style={{ paddingInlineStart: 0 }}>
        {Object.entries(productObj[index]).map(([key, value]) => (
          <Item key={key} pos={key}>
            <h3 style={{ color: "red", flex: 1, marginLeft: "20px" }}>{handleKey(key)}</h3>
            {console.log(key)}
            <p style={{ flex: 2 }}>{value.item}</p>
            <h3 style={{ color: "red", flex: 1 }}>{handlePrice(key, value.price)}đ</h3>
            {/* <p style={{flex: 1, fontFamily: 'Arial, Helvetica, sans-serif'}}>{data.address}</p> */}
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#277cea",
                display: "flex",
                padding: "4px 2px",
                marginRight: "10px",
              }}
            >
              <Link href={value.url} style={{ marginTop: 1 }}>
                Tới nơi bán
              </Link>
            </div>
          </Item>
        ))}
      </ul>
    </Container>
  );
}
