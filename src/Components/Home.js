import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
      // <Card className="text-center">
      //   <Card.Body>
      //     <Card.Title>Welcome to Movierulz Clone</Card.Title>
      //     <Card.Text>
      //       Your one-stop destination for the latest movies!
      //     </Card.Text>
      //   </Card.Body>
      // </Card>
      <div className="container text-center py-2 m-5 border border-success rounded custom-box">
        <h1>Welcome to Movierulz Clone</h1>
        <p>Your one-stop destination for the latest movies!</p>
      </div>
   
  )
}

export default Home