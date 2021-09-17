import React, { Component } from 'react'

export default class R22_PropsDefault extends Component {
    render() {
        let {ReactString,ReactNumber}=this.props
        return (
            <div style={{padding:"0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}
R22_PropsDefault.defaultProps = {
    ReactString:"리액트",
    ReactNumber:400
}