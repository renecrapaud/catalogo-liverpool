import React from 'react';
import "../style.css"
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

export default class ProductTile extends React.Component {
    fullBackdropPath(imgName) {
        if (imgName != null) {
          return `https://image.tmdb.org/t/p/w500${imgName}`;
        }
        return 'https://i.stack.imgur.com/GNhx0.png';
    };
    textooFormato(describe,tam){
        let myString = ''
        if(describe.trim() === ''){
            myString = "No disponible"
        } else {
            if(describe.length < tam){
                myString = describe
            } else {
                myString = describe.substring(0,tam-3) + '...'
            }
        }
        return myString
    };
   
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={this.fullBackdropPath(this.props.imagen)} alt="Placeholder"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 titleHeight">
                            {this.textooFormato(this.props.nombre,25)}</p>
                            <p className="subtitle is-6">Popularidad: {this.props.precio}</p>
                        </div>
                    </div>

                    <div className="content">
                    <p className="parrafoDescr">
                        {this.textooFormato(this.props.descr,103)}
                    </p>
                    
                    <button className="button is-success">
                        <Link to="/detalle" state={{ id: this.props.id }}>
                            Ver detalle
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}