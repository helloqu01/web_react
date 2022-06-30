import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.PNG'


const data = [
  {
    id:1,
    image:IMG1,
    title:'title1',
    github: '#1',
    demo: 'demo1'
  },
  {
    id:2,
    image:IMG1,
    title:'title2',
    github: '#2',
    demo: 'demo2'
  },
  {
    id:3,
    image:IMG1,
    title:'title3',
    github: '#3',
    demo: 'demo3'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfoilo__container">
     
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
           <div className="portfolio__item-cta">
            <a href={github} className="btn" target='_blank'> Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'> Live Demo</a>
           </div>
          </article>
          )
        })
      }
      
        
      </div>
    </section>
  )
}

export default Portfolio