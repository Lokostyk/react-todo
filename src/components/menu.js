import React from "react"
import Alert from "./alert"
import Form from "./form"
import Btns from "./delete-edit"

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

        this.state = {
            value: "",
            submits: [],
            alertValue: "",
            edit: false
        }
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
                alertValue: "Item added!",
            })
        }else{
            this.setState({
               alertValue: "Don't be shy, add something!"
            })

        }
        //Removing alert after 3 seconds
        setTimeout(()=>{
            this.setState({
                alertValue: ""
            }) 
        },3000)
    }
    handleDelete(event){
        const deleteId = parseFloat(event.target.parentElement.parentElement.parentElement.id)
        const submitsArr = this.state.submits.filter((item)=> item.id !== deleteId)
        this.setState({
            submits: submitsArr,
            alertValue: "Item deleted!"
        })
    }
    render(){
        return (
            <div>
                <Alert alertValue={this.state.alertValue} />
                <h1 className="title">Create your own list</h1>
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} edit={this.state.edit}/>
                <ul className="list">
                    {this.state.submits.map(item =>{
                        return (<li className="list__item" key={item.id} id={item.id}>
                            {item.currentValue}
                            <Btns btnType={true} id={item.id} delete={this.handleDelete} edit={"YOO"}/>
                        </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Menu