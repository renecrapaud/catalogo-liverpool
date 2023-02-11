import React from "react"
import "../style.css"
import "bulma/css/bulma.css";

export default class ProductTile extends React.Component {
    render() {
        return (
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Nombre</p>
                            <p class="subtitle is-6">Precio $</p>
                        </div>
                    </div>

                    <div class="content">
                        Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <br/><br/>
                    <button class="button is-success">Ver Detalles</button>
                    </div>
                </div>
            </div>
        )
    }
}