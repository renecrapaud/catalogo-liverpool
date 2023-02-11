import React from "react";
import ProductTile from "./ProductTile"
import { Col } from "react-bootstrap";

export default class ProductCatalog extends React.Component {
    renderTile = () => {
        return <Col md={3} className="mb-2">
            <ProductTile></ProductTile>
            </Col>
    }
    renderRow = () => {

    }
    render() {
        let tiles = [];
        for (let i = 0; i < 8; i++) {
            tiles.push(this.renderTile());
        }
        return tiles;
    }
}