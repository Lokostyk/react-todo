import React from 'react'

class Btns extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (this.props.btnType ? 
            <button className="btn">
                
            </button>:
            <p>siema</p>

        )
    }
}
export {Btns}