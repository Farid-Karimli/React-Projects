import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const nextPerson = () => {
    setIndex((index)=>{
      if (index === people.length - 1) {
        return 0;
      }
      let newIndex = index + 1;
      return newIndex;
    })
  }

  const prevPerson = () => {
    setIndex((index)=>{
      if (index === 0) {
        return people.length - 1;
      }  
      let newIndex = index - 1;
      return newIndex;
    })
  }

  const randomPerson = () => {
    setIndex((index)=> {
      const randomNumber = Math.floor(Math.random()*people.length);
      return randomNumber;
    })
  }

  return (
  <article className='review'>
   <div className = 'img-container'>
     <img src={image} alt = 'name' className='person-img' />
     <span className='quote-icon'>
       <FaQuoteRight/>
     </span>
   </div>
   <h4 className='author'> {name} </h4>
   <p className="job">{job}</p>
   <p className='info'> {text} </p>
   <div className='button-container'>
     <button onClick={prevPerson} className = 'prev-btn'>
       <FaChevronLeft />
     </button>
     <button onClick={nextPerson} className = 'next-btn'>
       <FaChevronRight />
     </button>
    
   </div>
   <button className='random-btn' onClick={randomPerson}> 
       Surprise Me 
    </button>
  </article>
  )
};

export default Review;
