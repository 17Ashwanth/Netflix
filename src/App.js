import './App.css';
import requests from './Requests';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/Row';



function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <h1 style={{color:'red'}}>Netflix</h1>
    <Row isposter={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />

    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />

    <Row title="Action movie" fetchUrl={requests.fetchActionMovies} />
    <Row title="comedy Movie" fetchUrl={requests.fetchComedyMovies} />

    <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />

    <Row title="Romance movie" fetchUrl={requests.fetchRomanceMovies} />

    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />



        </div>
  )

};



export default App;
