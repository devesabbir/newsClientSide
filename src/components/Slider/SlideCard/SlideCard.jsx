import React from 'react'
import { Card } from 'react-bootstrap';
import './SlideCard.css'

function SlideCard({data}) {


  return (
    <Card className='slideCard' style={{width:'100%'}}>
     <Card.Img variant="top" src={data.img} />
     <Card.Body>
      <Card.Title>{data.title}</Card.Title>
    </Card.Body>
  </Card>
  )
}

export default SlideCard