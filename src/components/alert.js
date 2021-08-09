import React from "react"

class Alert extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="alert">{this.props.alertValue}</div>
            </React.Fragment>
        )
    }
}
export default Alert