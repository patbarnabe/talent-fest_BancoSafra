import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Services/firebase.js'
import CardArticle from '../Card/CardArticle';
import './carousel.css'

 const CarouselArticle = ({arrayConteudoSlides}) => {
  console.log(arrayConteudoSlides, '>>')
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <section className='container-carousel-article'>
      <i className="fas fa-chevron-left" alt='Scroll left'
        onClick={handleLeftClick}
      />
      <div className='carousel' ref={carousel}>
          {arrayConteudoSlides.conteudo.map((item) => 
            <CardArticle article={item}/> 
          )}    
      </div>
      <i className="fas fa-chevron-right" alt='Scroll right'
        onClick={handleRightClick}
      />
    </section>

  )
 
}

export default CarouselArticle;
