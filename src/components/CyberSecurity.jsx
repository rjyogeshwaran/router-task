import React from 'react'
import cb1 from "../assets/cybersecurity/pic1.png"
import cb2 from "../assets/cybersecurity/pic2.png"
import cb3 from "../assets/cybersecurity/pic3.png"
import CyberSecurityCard from './CyberSecurityCard'

function CyberSecurity() {
  const cyberSecurity = [{
    title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    image: cb1,
    description: "When youre hiring a full-stack developer, what are the most important things you look for?"
  },
  {
    title: "What Is Hacking? Types of Hacking & More",
    image: cb2,
    description: "Have you ever wondered what hacking is all about? It’s a big deal in today’s"
  },
  {
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    image: cb3,
    description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online"
  }]
  return <>
    {
      cyberSecurity.map((e, i) => {
        return (<CyberSecurityCard cyberSecurity={e} key={i} />)
      })
    }
    </>
}

export default CyberSecurity