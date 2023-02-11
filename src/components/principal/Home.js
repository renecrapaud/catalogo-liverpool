import ProductCatalog from "./ProductCatalog.js"
import { Row } from "react-bootstrap";
import NavScroll from "./AppBar"
import Hero from "./HeroTitle"

const Home = () => {
  return (
    <>
      <NavScroll></NavScroll>
      <div className="p-4 box mt-3 text-center mb-5">
        <Row className="mb-3 mt-5">
          <Hero seccion={'Categoría'} SubTitulo={''}></Hero>
        </Row>
        <Row>
          <ProductCatalog></ProductCatalog>
        </Row>
      </div>
    </>
  );
};

export default Home;



