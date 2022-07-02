import React from 'react'
import styled from 'styled-components'
import { detail_data } from './ExampleData'


const Container = styled.div`
    margin: 60px 120px;
`

const Title = styled.h3`
  font-weight: bold;
  background-color: rgb(23, 115, 168);
  font-family:sans-serif;
  width: 18%;
  text-align: center;
  color: white;
  padding: 8px 0px;
`

const Item = styled.div`
    display: flex;
    margin-right: 180px;
    border: 1px solid #ccc;
`

const Label = styled.p`
    font-size: 16px;
    flex: 1;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #bbb;
    padding: 12px 4px;
    margin: 0px;
`

const Info = styled.p`
    font-size: 16px;
    flex: 2;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
    padding: 12px 4px;
    margin: 0px;
`

export default function PhoneDetail({index}) {
    const data = detail_data[index];
    console.log(data)
    return (
        <Container>
            <Title>Thông tin chi tiết của sản phẩm</Title>
            <ul style={{ listStyleType: 'none' }}>
                {Object.keys(data).map((key, index) => (
                    <li key={index}>
                        <Item>
                            <Label>{key}</Label>
                            <Info>{data[key]}</Info>
                        </Item>
                    </li>))}
            </ul>
        </Container>
    )
}
