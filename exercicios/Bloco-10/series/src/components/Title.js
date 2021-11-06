import React from "react";

class Title extends React.Component {
    render() {
        const prop = this.props;
        
        return <h1 className="title">{prop.texto}</h1>
    }
}

export default Title;