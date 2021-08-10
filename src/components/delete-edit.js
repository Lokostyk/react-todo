import React from 'react'

class Btns extends React.Component {
    render(){
        return (
            <div>
                <button className="btn" onClick={this.props.handleEdit}>
                    <img src="images/edit.svg" alt="Edit button" />
                </button>
                <button className="btn" onClick={this.props.delete}>
                    <img src="images/delete.svg" alt="Delete button" />
                </button>
            </div>
        )
    }
}
export default Btns