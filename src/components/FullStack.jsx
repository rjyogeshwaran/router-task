import React from 'react'
import Container from './Container'
import pic1 from "../assets/fullStack/pic1.png"
import pic2 from "../assets/fullStack/pic2.png"
import pic3 from "../assets/fullStack/pic3.png"

function FullStack() {
  const data = [{
    title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    image: pic1,
    description: "When youre hiring a full-stack developer, what are the most important things you look for?"
  },
  {
    title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
    image: pic2,
    description: "A Full Stack Developer is a tech all-rounder. They work on both the front"
  },
  {
    title: "Horizontal vs Vertical Scaling for Efficient System Design",
    image: pic3,
    description: "In the world of system design, envision a digital skyscraper a multifaceted structure built"
  }]



  return <>
      <div>
      {
        data.map((e, i) => {
          return (<Container title={e.title} description={e.description} image={e.image} key={i}/>)
        })
      }
      </div>
    </>
}

export default FullStack