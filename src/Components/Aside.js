import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../App.css"
import "./Aside.css"
const Aside = () => {
  return (
    <div className="right-sidebar custom-box p-2" >
        <h2>Quick links</h2>
        <Card border="success" style={{ width: '18rem',margin:'4px' } }>
        <Card.Header className='custom-text'>Recent and Updated Movies</Card.Header>
        <ListGroup variant="flush" className='custom-box' >
          <ListGroup.Item style={{backgroundColor:'black'}}><a className='no-underline' href="/ARM"> Arm (2024) HDRip Tamil Movie Watch Online Free</a></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'black'}}><a className='no-underline' href="/Amaran">Amaran (2024) HDRip Telugu Movie Watch Online Free</a></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'black'}}><a className='no-underline' href="/englishMovies">Van Pizhai (2024) HDRip Tamil Movie Watch Online Free</a></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'black'}}><a  className='no-underline' href="/movielist"> Petta Rap (2024) HDRip Telugu Movie Watch Online Free</a></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'black'}}><a className='no-underline' href="/englishMovies">Van Pizhai (2024) HDRip Tamil Movie Watch Online Free</a></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'black'}}><a  className='no-underline' href="/movielist"> Petta Rap (2024) HDRip Telugu Movie Watch Online Free</a></ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default Aside