import React from 'react';
import Card from './Card'

export default function CardContainer ({cafes}){
    return (      <div className="coffee-card-grid">
    {cafes.map((restaurant) => (
      <Card key={restaurant._id} shopId={restaurant._id} />
    ))}
  </div>
  )
}