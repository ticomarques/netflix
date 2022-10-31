import React, { useState } from 'react'
import Banner from '../components/Banner';
import "./HomeScreen.css";
import Nav from '../components/Nav';
import requests from '../Requests';
import Row from '../components/Row';
import Footer from '../components/Footer';
import Modal from 'react-modal';


function HomeScreen() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);

  const handleModal = (movie) => {
        setIsOpen(true);
        setMovie(movie);
        console.log(movie);
  }

  Modal.setAppElement('#root');

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '0',
      border: 'none',
      marginRight: '-50%',
      width: "500px",
      transform: 'translate(-50%, -50%)',
    },
  };


  return (
    <div className="homeScreen">
        <Nav />
        
        {/**  BANNER */}
        <Banner />

        {/**  ROW */}

        <Row 
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          handleModal={handleModal}
        />
        <Row 
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          handleModal={handleModal}
        />
        <Row 
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          handleModal={handleModal}
        />
        <Row 
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          handleModal={handleModal}
        />
        <Row 
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          handleModal={handleModal}
        />
        <Row 
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          handleModal={handleModal}
        />
        <Row 
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          handleModal={handleModal}
        />
        <Row 
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          handleModal={handleModal}
        />

        <Footer />

        

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={`About ${movie?.name}`}
      >

        <div 
          className="bgModal" 
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            minHeight: '350px',
          }}
        >
          
          <button onClick={closeModal} className="closeModal">x</button>
          <div className="modalContent">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <p>Rating: <span>{movie?.vote_average}</span> | Year: <span>{movie?.first_air_date}</span></p>
            <p>{movie?.overview}</p>
          </div>

        </div>
        
      </Modal>


    </div>
  )
}

export default HomeScreen