import ProductTile from "./ProductTile"
import { Col } from "react-bootstrap";
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import GlobalState from '../../context/productContext';

export default class ProductCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: null,
            prodBk: null
        }
    }
    renderTile = (id, name, price, descr, imgPath) => {
        return <Col sm={12} md={6} lg={3} className="mb-2" key={id}>
            <ProductTile id={id} nombre={name} precio={price} descr={descr} imagen={imgPath} ></ProductTile>
            </Col>
    }
    searchProd = (termOfSearch) => {
        let termMinus = termOfSearch.toLowerCase()
        if(termOfSearch !== ''){
            let productTmp = this.state.prodBk.filter(item => 
                item.original_title.toLowerCase().includes(termMinus) === true 
            );
            this.setState({ products: productTmp })
        } else {
            this.setState({ products: this.state.prodBk })
        }
    }
    async componentDidMount() {
        let urlCons = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-MX&page=1`
        const products = await axios.get(urlCons)
        .catch(function (error) {})
        if(products != null){
            this.setState({ products: products.data.results })
            this.setState({ prodBk: products.data.results })

        }
    }
    render() {
        if(this.state.prodBk != null){
            return <>
                <DefProdState products = {this.state.prodBk} fn = {this.searchProd}></DefProdState>
                {this.state.products.map(mapping => (
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

function DefProdState(props){
    const [estado, setState] = useContext(GlobalState);
    useEffect(() => {
        setState(state => ({products: props.products, searchTerm: estado.searchTerm}))
        // setState(state => ({...product, searchTerm: ''}))
    }, []);
    useEffect(() => {
        if(typeof(estado.searchTerm) != 'object'){
            props.fn(estado.searchTerm)
        }
    },[estado.searchTerm])
}