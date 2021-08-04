import React from 'react';
import Triforce from '../assets/Triforce.svg' 

export default function Header() {
  return (
    <header className="app-header">
      <div className='title-header'>        
        <img src={ Triforce } alt='triforce'/>
        <h1>Hirule Fields</h1>
      </div>
    </header>
  )
}