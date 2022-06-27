import React from 'react'
import styled from 'styled-components'
import { content_data } from './ExampleData'

const Container = styled.div`
    width: 100%;
`

const ListHead = styled.h2`
    font-weight: bold;
    margin: 10px 120px;
    background-color: tomato;
    font-family: "Times New Roman", Times, serif;
    width: 20%;
    text-align: center;
`

const Item = styled.li`
    padding: 16px 0px;
    margin: 0px 120px;
    background-color: ${props => props.pos % 2 === 0 ? '#E6E6FA' : '#fff'};
    list-style-type: none;
    display: flex;
    justify-content: space-between;
`

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
`



export default function Content() {
  return (
    <Container>
        <ListHead>So sánh giá của các nơi bán</ListHead>
        <ul style={{paddingInlineStart: 0}}>
        {content_data.map((data, idx) => (
            <Item key={idx} pos={idx}>
                <h3 style={{color: 'red', flex: 1, marginLeft: '20px'} }>{data.name_store}</h3>
                <p style={{flex: 2}}>{data.phone_name}</p>
                <h3 style={{color: 'red', flex: 1} }>{data.price}</h3>
                <p style={{flex: 1, fontFamily: 'Arial, Helvetica, sans-serif'}}>{data.address}</p>
                <div style={{alignItems:'center', backgroundColor: '#277cea', display: 'flex', padding: '4px 2px', marginRight: '10px'}}>
                    <Link href="#" style={{marginTop: 1}}>Tới nơi bán</Link>
                </div>
            </Item>
        ))}
        </ul>
    </Container>
  )
}
