import React from 'react';
import { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import { SwipeDown } from '@mui/icons-material';
const TinderCards = () => {
 const [people, setPeople] = useState([
    {
        name: "Elon Musk",
        urls : ""
    },
    {
        name : "Jeff Bezos",
        urls : ""    
      },
    {
        name : "Adani",
        urls : ""
    },
    {
        name : " Al-Fareed",
        urls : ""
    },
    {
        name : "alfa-warrior",
        urls : ""
    },
 ])
 const swiped = (direction,nameToDelete)=>{
    console.log("removing"+nameToDelete);
 }
 const outOfFrame = (namee)=>{
    console.log("crush"+namee);
 }
  return (
    <div className='TinderCards'>
      <div className="TinderCardContainer">
      {people.map((person)=>(
        <TinderCard
            className="swipe"
            key = {person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
        >
            <div className="card"
            style={{backgroundImage : `url(${person.urls})`}}
            >
            <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default TinderCards;
