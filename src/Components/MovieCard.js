import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const MovieCard=({ movie })=> {

  return (
          <Link  to={movie.moveLink} className="no-underline">
          <Card style={{ width: '19vw', height:'auto' }} >
            <Card.Img variant="top" style={{ width: '100%', height:'auto' }} src={movie.image} />
            <Card.Body>
              <Card.Title style={{ fontSize:'15px', fontFamily:'fantasy', color:'white'}} >{movie.title}</Card.Title>
              <Card.Text style={{fontSize:'15px', fontSizeAdjust:"inherit"}}>{movie.description}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    moveLink:PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;