import React from 'react'
import MovieCard from './MovieCard'

const Hindimovies = [
    {
        movieLink: '/',
        image: './images/HindiImages/Settlement-Hindi.jpg',
        id: 1,
        title: 'Settlement-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Aayushmati-Geeta-Matric-Pass-Hindi.jpg',
        id: 2,
        title: 'Aayushmati-Geeta-Matric-Pass-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Bhool-Bhulaiyaa-3-Hindi.jpg',
        id: 3,
        title: 'Bhool-Bhulaiyaa-3-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Buddy-Hindi.jpg',
        id: 4,
        title: 'Buddy-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Crave-Hindi.jpg',
        id: 5,
        title: 'Crave-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Jigra-Hindi.jpg',
        id: 6,
        title: 'Jigra-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Khel-Khel-Mein-Hindi.jpg',
        id: 7,
        title: 'Khel-Khel-Mein-Hindi (2023)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Last-World-War-Hindi.jpg',
        id: 8,
        title: 'Last-World-War-Hindi (2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/HindiImages/Money-Tantra-Hindi.jpg',
        id: 9,
        title: 'Money-Tantra-Hindi(2024)',
        description: 'HDRip Hindi Movie Watch Online Free'
    },

]
const HindiMovies = () => {
    return (
        <div className='movie-list'>
            {Hindimovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default HindiMovies