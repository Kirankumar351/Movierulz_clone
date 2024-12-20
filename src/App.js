
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Aside from './Components/Aside';
import TeluguMovies from './Components/TeluguMovies';
import HindiMovies from './Components/HindiMovies';
import EnglishMovies from './Components/MovieFiles/EnglishMovies';
import ARM from './Components/MovieFiles/ARM';
import Amaran from './Components/MovieFiles/Amaran';


function App() {

  return (
    <>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/MovieList' element={<MovieList />} />
          <Route path='/teluguMovies' element={<TeluguMovies />} />
          <Route path='/hindiMovies' element={<HindiMovies />} />
          <Route path='/englishMovies' element={<EnglishMovies />} />
          <Route path='/ARM' element={<ARM />} />
          <Route path='/Amaran' element={<Amaran />} />
        </Routes>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
