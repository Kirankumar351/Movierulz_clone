import React from 'react'
import MovieCard from './MovieCard'
import "../App.css"

const Telugumovies = [
    {
        movieLink: '/ARM',
        image: './images/A.R.M-Telugu.jpg', id: 1,
        title: 'A.R.M (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Amaran-Telugu.jpg',
        id: 2, title: 'Amaran (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Appudo-Ippudo-Eppudo-Telugu.jpg',
        id: 1, title: 'Appudo-Ippudo-Eppudo (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Buddy-Hindi.jpg',
        id: 2, title: 'Buddy (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Chief-of-Station-Telugu.jpg',
        id: 1, title: 'Chief-of-Station (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Devara-Part-1-Telugu.jpg',
        id: 2,
        title: 'Devara-Part-1 (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Kanguva-Telugu.jpg',
        id: 1, title: 'A.R.M (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Last-World-War-Telugu.jpg',
        id: 2, title: 'Last-World-War (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Maa-Nanna-Superhero-Telugu.jpg',
        id: 1, title: 'Maa-Nanna-Superhero (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
    {
        image: './images/Martin-Telugu.jpg',
        id: 2, title: 'Martin-Telugu (2024)',
        description: 'HDRip Telugu Movie Watch Online Free'
    },
]
const TeluguMovies = () => {
    return (
        <div className='movie-list'>
            {Telugumovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default TeluguMovies