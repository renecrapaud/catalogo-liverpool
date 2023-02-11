import React from "react"
import "./style.css"

export default class ProductTile extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src='https://via.placeholder.com/411x308' alt="Placeholder image"></img>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title product-title">MKX</p>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <br></br>
                    </div>
                    <a className="button is-primary" href="product.html" target="_blank">
                        <strong>More Details</strong>
                    </a>
                </div>
            </div>
        )
    }
}