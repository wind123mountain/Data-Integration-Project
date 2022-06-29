// rfc, rafce
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  background-color: #cd5c5c;
`;

const Wrapper = styled.div`
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.b`
  font-size: 32px;
  color: white;
`;

const Input = styled.input`
  border: none;
  margin-right: 10px;
`;

const SearchArea = styled.div`
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 50%;
  background-color: #fff;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <button onClick={() => navigate("/")}>
            <HomeIcon style={{ color: "#fff", fontSize: "32px" }} />
          </button>
        </Left>
        <Center>
          <Logo>ThePhone</Logo>
        </Center>
        <Right>
          <SearchArea>
            <Input />
            <SearchIcon />
          </SearchArea>
        </Right>
      </Wrapper>
    </Container>
  );
}
