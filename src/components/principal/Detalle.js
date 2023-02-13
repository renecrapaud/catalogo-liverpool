import { Row, Col } from "react-bootstrap";
import NavScroll from "./AppBar"
import Hero from "./HeroTitle"
import GlobalState from '../../context/productContext';
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import "bulma/css/bulma.css";

function searchById(array,search){
    let found = null
    array.forEach(element => {
        if(search === element.id){
            found = element
            return
        }
    });
    return found
}

function fullBackdropPath(imgName) {
    if (imgName != null) {
      return `https://image.tmdb.org/t/p/w500${imgName}`;
    }
    return 'https://i.stack.imgur.com/GNhx0.png';
};

const Detalle = () => {
    const [product] = useContext(GlobalState);
    let { state } = useLocation();
    let arrProds = Object.values(product['products'])[0]
    let elem = searchById(arrProds, state.id)
    // console.log(elem)
  return (
    <>
      <NavScroll></NavScroll>
      <div className="p-4 box mt-3 text-center mb-5">
        <Row className="mb-3 mt-5">
          <Hero seccion={elem.title} SubTitulo={''}></Hero>
        </Row>
        <Row>
            <Col xs={12} lg={6}>
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={fullBackdropPath(elem.backdrop_path)} alt="Placeholder"/>
                    </figure>
                </div>
            </div>
            </Col>
            <Col xs={12} lg={6}>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <p> Titulo original: {elem.original_title}</p>
                            <p>Lenguaje original: {elem.original_language}</p>
                            <p>Fecha de lanzamiento: {elem.release_date}</p>
                            <p>Voto promedio: {elem.vote_average} Total de votos: {elem.vote_count} </p>
                            <p>Reseña: {elem.overview} </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Detalle;

