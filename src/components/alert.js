import React from "react"

class Alert extends React.Component {
    renderColor(){
        const alertValue = this.props.alertValue
        if(alertValue === "Item added!" || alertValue === "Item edited!"){
            return "green"
        }else if(alertValue === "Item removed!" || alertValue === "Don't be shy, add something!"){
            return "red"
        }else if(alertValue === "Blank? Maybe name of Your pet?"){
            return "gold"
        }
        return ""
    }
    render(){
        return (
            <React.Fragment>
                <div className={"alert" + " " + `${this.renderColor()}`}>{this.props.alertValue}</div>
            </React.Fragment>
        )
    }
}
export default Alert