import React from "react";
import "bulma/css/bulma.css";

class Hero extends React.Component {

render () {
    return (
      <>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                  {this.props.seccion}
                </p>
                <p className="subtitle">
                  {this.props.SubTitulo}
                </p>
            </div>
        </section>
      </>
    );
  };
}
  
  export default Hero;
  