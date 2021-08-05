import React from "react"
import Alert from "./alert"
import Form from "./form"

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            submits: [],

            itemAdded: "not--display",
            itemRemoved: "not--display",
            missingItem: "not--display"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(){
        if(this.state.value !== "" && this.state.value !== " "){
            const id = Math.random() * 1000
            const currentValue = this.state.value
            const submit = {id,currentValue}
            this.state.submits.push(submit)
            this.setState({
                value: "",
                itemAdded: "display"
            })
        }else{
            this.setState({
               missingItem: "display"
            })

        }
        setTimeout(()=>{
            this.setState({
               missingItem: "not--display"
            }) 
        },2500)
    }
    handleDelete(event){
        const deleteId = parseFloat(event.target.parentElement.id)
        const submitsArr = this.state.submits.filter((item)=> item.id !== deleteId)
        this.setState({
            submits: submitsArr
        })
    }
    render(){
        const Btn = () => {return (<button className="btn" onClick={this.handleDelete}>X</button>)}
        const itemAdded = this.state.itemAdded
        const itemRemoved = this.state.itemRemoved
        const missingItem = this.state.missingItem

        return (
            <div>
                <Alert itemAdded={itemAdded} itemRemoved={itemRemoved} missingItem={missingItem} />
                <h1 className="title">Create your own list</h1>
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} />
                <ul className="list">
                    {this.state.submits.map(item => <li className="list__item" key={item.id} id={item.id}>
                        {item.currentValue}<Btn /></li>)}
                </ul>
            </div>
        )
    }
}

export default Menu