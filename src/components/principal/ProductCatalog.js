import ProductTile from "./ProductTile"
import { Col } from "react-bootstrap";
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import GlobalState from '../../context/productContext';

export default class ProductCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: null
        };
    }
    renderTile = (id, name, price, descr, imgPath) => {
        return <Col sm={12} md={6} lg={3} className="mb-2" key={id}>
            <ProductTile id={id} nombre={name} precio={price} descr={descr} imagen={imgPath} ></ProductTile>
            </Col>
    }
    async componentDidMount() {
        let urlCons = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-MX&page=1`
        const products = await axios.get(urlCons)
        .catch(function (error) {})
        if(products != null){
            this.setState({ products: products.data });
        }
    }
    render() {
        if(this.state.products != null){
            return <>
                <DefProdState products = {this.state.products.results}></DefProdState>
                {this.state.products.results.map(mapping => (
                    this.renderTile(mapping.id ,mapping.original_title, mapping.vote_count, mapping.overview, mapping.backdrop_path )
                ))}
            </>;
        } else {
            return <Col sm={12} className="mb-2">
                <h3>No hay productos</h3>
            </Col>
        }
    }
}

function DefProdState(products){
    const [product, setState] = useContext(GlobalState);
    useEffect(() => {
        setState(state => ({...product, products: products}))
    }, []);
}