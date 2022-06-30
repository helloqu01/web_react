import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container expreience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="expreience__content">
            <article className='expreience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>REACT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            </div>
        </div>


        <div className="experience__backend">
        <h3> Backend Development</h3>
          <div className="expreience__content">
            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MYsql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expreience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Experience