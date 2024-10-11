import React from 'react'
import CardsList from './CardsList';
import flury from '../assets/flury.svg'
import '../styles/first.css';

const FirstComponent = () => {
  return (
    <div className="holder">
        <div className="background">           
            <span className='heading'>JOIN THE BATTLE OF THE RICKS</span>
            <span className='altText'>the battle of ricks is a card game inspired by the animation tv serries Rick and Morty</span>         
        </div>
        <div className="cards">
            <CardsList />
        </div>
    </div>

  )
}

export default FirstComponent
