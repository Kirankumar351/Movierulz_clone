
import Container from 'react-bootstrap/Container';
import "../../App.css"
import React, { useState, useEffect } from 'react';

const ARM = () => {
    const [movieLink,setmovieLink]=useState('');
    const [movieLink2,setmovieLink2]=useState('');
    const [movieLink3,setmovieLink3]=useState('');
    const [movieLink4,setmovieLink4]=useState('');

    useEffect(()=>{
        setmovieLink('https://www.5movierulz.io/arm-2024-telugu/movie-watch-online-free-3688.html');
        setmovieLink2('https://www.5movierulz.io/i-hate-love-2024-telugu/movie-watch-online-free-3772.html');
        setmovieLink3('https://www.5movierulz.io/arm-2024-telugu/movie-watch-online-free-3688.html');
    },[]);

    const handleClick =()=>{
        window.open(movieLink);
    }
    const handleClick1 =()=>{
        window.open(movieLink2);
    }
    function handleClick2(){
        window.open(movieLink3);
    };
    return (
        <>
            <Container>
                <img src="../images/A.R.M-Telugu.jpg" class="rounded mx-auto d-block" alt="Arm" style={{ width: '250px', height: 'auto' }} />

                <div class="card-body txtSpace">
                    <h5 class="card-title">A.R.M-Telugu</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary gap-2">2024</h6>
                    <p class="card-text">HDRip Telugu Movie Watch Online Free'.</p>
                </div>
                <br/><br/>
                <div class="row txt">
                    <div class="col-9 text-truncate">
                        <label>Matka Movie Info:</label>
                        <p class="card-text">Directed by: Karuna Kumar</p>
                        <p class="card-text">Written by: Karuna Kumar</p>
                        <p class="card-text">Starring by: Varun Tej, Meenakshi Chaudhary, Nora Fatehi, Kishore, Naveen Chandra, Ajay Ghosh</p>
                        <p class="card-text">Genres: Action, Crime, Drama</p>
                        <p class="card-text">Categories: Telugu Featured, Telugu Movies 2024</p>
                        <p class="card-text">Country: India</p>
                        <p class="card-text">Language: Telugu</p>
                    </div>
                </div>

                <hr />
                <a href="#" class="card-link" className='no-underline'>
                    <div className="d-grid gap-2 linkSpace" >
                        <button onClick={handleClick} type="button" class="btn btn-warning btn-md w-50 ">
                            Click  Download - 2GB 1080p
                        </button>
                        <button onClick={handleClick1} type="button" class="btn btn-warning btn-md w-50 " >
                            Click  Download - 1.5GB 1080pp
                        </button>
                        <button onClick={handleClick2()}type="button" class="btn btn-warning btn-md w-50 ">
                            Click  Download - 800GB 720p
                        </button>
                        <button type="button" class="btn btn-warning btn-md w-50 ">
                            Click  Download - 600GB 720p
                        </button><button type="button" class="btn btn-warning btn-md w-50 ">
                            Click  Download - 400GB 360p
                        </button>
                        <button type="button" class="btn btn-warning btn-md w-50 ">
                            Click  Download - 250GB 270p
                        </button>
                    </div>
                    </a><br />
            </Container>


        </>

    )
}

export default ARM