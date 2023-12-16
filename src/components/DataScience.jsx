import React from 'react'
import DataScienceCard from './DataScienceCard'
import dspic1 from "../assets/dspic/dspic1.png"
import dspic2 from "../assets/dspic/dspic2.png"
import dspic3 from "../assets/dspic/dspic3.png"

function DataScience() {
  const dataScience = [{
    title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    image: dspic1,
    description: "Are you someone who’s not interested in coding, but wants to get placed in tech"
  },
  {
    title: "Impact of Certification Programs on Hiring Data Scientists",
    image: dspic2,
    description: "Data scientists are the creators behind transforming the raw data into edible data insights."
  },
  {
    title: "Top Product-Based Companies for Data Science Freshers",
    image: dspic3,
    description: "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing"
  }]
  return <>
    {
      dataScience.map((e, i) => {
        return (<DataScienceCard dataScience={e} key={i} />)
      })
    }
    
    </>
  }


export default DataScience