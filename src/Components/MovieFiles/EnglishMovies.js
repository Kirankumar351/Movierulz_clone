import React from 'react'
import MovieCard from '../MovieCard'

const Englishmovies = [
    {
        movieLink: '/',
        image: './images/EnglishImages/Alien-Romulus-English.jpg',
        id: 1,
        title: 'Alien-Romulus-English (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/EnglishImages/A-Quiet-Place-Day-One.jpg',
        id: 2,
        title: 'A-Quiet-Place-Day-One (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/EnglishImages/Deadpool-&-Wolverine-English.jpg',
        id: 3,
        title: 'Deadpool-&-Wolverine-English (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/EnglishImages/Despicable-Me-4.jpg',
        id: 4,
        title: 'Despicable-Me-4-English (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/EnglishImages/IF-English.jpg',
        id: 5,
        title: 'IF-English (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/EnglishImages/Joker-Folie-a-Deux-English.jpg',
        id: 6,
        title: 'Joker-Folie-a-Deux-English (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
    {
        movieLink: '/',
        image: './images/EnglishImages/Smile-2.jpg',
        id: 7,
        title: 'Smile-2 (2024)',
        description: 'HDRip English Movie Watch Online Free'
    },
]
const EnglishMovies = () => {
    return (
        <div className='movie-list'>
            {Englishmovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default EnglishMovies