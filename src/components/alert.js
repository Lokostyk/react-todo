import React from "react"

class Alert extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>
                <div className={this.props.missingItem}>Don't be shy, add something!</div>
                <p></p>
                <p></p>
            </div>
        )
    }
}
export default Alert