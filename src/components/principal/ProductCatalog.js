import React from "react";
import ProductTile from "./ProductTile"
import { Col } from "react-bootstrap";
import axios from 'axios';

export default class ProductCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: null
        };
    }
    renderTile = (id, name, price, descr, imgPath) => {
        return <Col sm={12} md={6} lg={3} className="mb-2" key={id}>
            <ProductTile nombre={name} precio={price} descr={descr} imagen={imgPath} ></ProductTile>
            </Col>
    }
    async componentDidMount() {
        let urlCons = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-MX&page=1`
        const products = await axios.get(urlCons);
        this.setState({ products: products.data });
    }
    render() {
        if(this.state.products != null){
            return <>
                {this.state.products.results.map(mapping => (
                    this.renderTile(mapping.id ,mapping.original_title, mapping.vote_count, mapping.overview, mapping.backdrop_path )
                ))}
            </>;
        } else {
            return <></>
        }
    }
}