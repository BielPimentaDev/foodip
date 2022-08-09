import React from 'react'
import Header from '../../common/Header'
import Comments from './Comments'
import FirstSection from './FirstSection'
import Footer from './Footer'
import Location from './Location'
import MostPopular from './MostPopular'

export default function Home() {
  return (
    <div>
      <Header/>
      <FirstSection/>
      <MostPopular/>
      <Comments/>
      <Location/>
      <Footer/>
      
      </div>
  )
}
