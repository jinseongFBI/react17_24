import React, { Component } from 'react'

export default class R23_PropsNode extends Component {
    render() {
        return (
            <div style={{padding:"0px"}}>
                {this.props.children}
            </div>
        )
    }
}
