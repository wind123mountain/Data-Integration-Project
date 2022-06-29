import React from 'react'
import Header from '../component/Header'
import Slider from '../component/Slider'
import Content from '../component/Content'
import PhoneDetail from '../component/PhoneDetail'
export default function Home({id}) {
  return (
    <div>
        <Header />
        <Slider index = {id}/>
        <Content index={id}/>
        <PhoneDetail index={id}/>
    </div>
  )
}
