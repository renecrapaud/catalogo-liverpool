import React from "react";
import ProductTile from "./ProductTile"
import { Col } from "react-bootstrap";

export default class ProductCatalog extends React.Component {
    renderTile = () => {
        return <Col md={4} className="mb-5">
            <ProductTile></ProductTile>
            </Col>
    }
    renderRow = () => {

    }
    render() {
        let tiles = [];
        for (let i = 0; i < 9; i++) {
            tiles.push(this.renderTile());
        }
        return tiles;
    }
}