import React from 'react'
import cr1 from "../assets/career/pic1.png"
import cr2 from "../assets/career/pic2.png"
import cr3 from "../assets/career/pic3.png"
import CareerCard from './CareerCard'
function Career() {
  const career = [{
    title: "UI/UX Designer Job Description and Roles & Responsibilities",
    image: cr1,
    description: "UI UX is the abbreviated word that’s been rocking the trend over the years, especially"
  },
  {
    title: "Top 5 IT Jobs for Economics Students A Lucrative Career Path  ",
    image: cr2,
    description: "In today’s digital age, the intersection of economics and technology offers exciting career opportunities"
  },
  {
    title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
    image: cr3,
    description: "With the rapid advancement of technology, the demand for IT professionals has soared in recent"
  }]
  return <>
    {
      career.map((e, i) => {
        return (<CareerCard career={e} key={i} />)
      })
    }
  </>
}


export default Career