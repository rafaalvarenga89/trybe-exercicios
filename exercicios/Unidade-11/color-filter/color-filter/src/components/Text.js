import React, { Component } from 'react'

export class Text extends Component {
    render() {
        const { text } = this.props;
    
        return (
            <div>Texto: {text}</div>
        )
    }
}

export default Text