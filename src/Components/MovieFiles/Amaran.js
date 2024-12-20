import Container from 'react-bootstrap/Container';
import "../../App.css"
import React,{useState,useEffect} from 'react'

const Amaran = () => {
    const [AmaranLink,setAmaranLink]=useState('');
    const [AmaranLink1,setAmaranLink1]=useState('');
    const [AmaranLink2,setAmaranLink2]=useState('');

    useEffect(()=>{
        setAmaranLink();
        setAmaranLink1();
        setAmaranLink2();
    },[]);

    const AmaranLinkClick=()=>{
        window.open(AmaranLink);
    }
    const AmaranLinkClick1=()=>{
        window.open(AmaranLink1);
    }
    const AmaranLinkClick2=()=>{
        window.open(AmaranLink2);
    }
    return (
        <>
            <Container>
                <img src="../images/Amaran-Telugu.jpg" class="rounded mx-auto d-block" alt="Arm" style={{ width: '250px', height: 'auto' }} />

                <div class="card-body txtSpace">
                    <h5 class="card-title">Amaran - Telugu</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary gap-2">2024</h6>
                    <p class="card-text">HDRip Telugu Movie Watch Online Free'.</p>
                </div>
                <br /><br />
                <div class="row txt">
                    <div class="col-5 text-truncate">
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
                        <button onClick={AmaranLinkClick} type="button" class="btn btn-warning btn-md w-50 ">
                            Click  Download - 2GB 1080p
                        </button>
                        <button onClick={AmaranLinkClick1} type="button" class="btn btn-warning btn-md w-50 " >
                            Click  Download - 1.5GB 1080pp
                        </button>
                        <button onClick={AmaranLinkClick2} type="button" class="btn btn-warning btn-md w-50 ">
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

export default Amaran