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
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditSubmit = this.handleEditSubmit.bind(this)

        this.state = {
            value: "",
            submits: [],
            alertValue: "",
            edit: false,
            editItemId: ""
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
        this.removeAlert()
    }
    handleDelete(event){
        const deleteId = parseFloat(event.target.parentElement.parentElement.parentElement.id)
        const submitsArr = this.state.submits.filter((item)=> item.id !== deleteId)
        this.setState({
            submits: submitsArr,
            alertValue: "Item removed!"
        })
        this.removeAlert()
    }
    handleEdit(event){
        const editId = parseFloat(event.target.parentElement.parentElement.parentElement.id)
        let editValue = ""
        this.state.submits.forEach(item => item.id === editId ? editValue = item : "")
        this.setState({
            value: editValue.currentValue,
            edit: true,
            editItemId: editId
        })
    }
    handleEditSubmit(){
        const id = this.state.editItemId
        const currentValue = this.state.value
        if(currentValue === "" || currentValue === " "){
            this.setState({
               alertValue: "Blank? Maybe name of Your pet?"
            })
            this.removeAlert()
        }else {
        const submitsEditedList = this.state.submits.reduce((result,item)=>{
            if(id === item.id){
                const editedItem = {id,currentValue}
                result.push(editedItem)
                return result
            }else{
                result.push(item)
                return result
            }
        },[])
        this.setState({
            value: "",
            submits: submitsEditedList,
            alertValue: "Item edited!",
            edit: false
        })
    }
    }
    //Removing alert after 3 seconds
    removeAlert(){
        setTimeout(()=>{
            this.setState({
                alertValue: ""
            }) 
        },3000)
    }
    render(){
        return (
            <div>
                <Alert alertValue={this.state.alertValue} />
                <h1 className="title">Create your own list</h1>
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} 
                edit={this.state.edit} handleEditSubmit={this.handleEditSubmit} />
                <ul className="list">
                    {this.state.submits.map(item =>{
                        return (<li className="list__item" key={item.id} id={item.id}>
                            {item.currentValue}
                            <Btns btnType={true} id={item.id} delete={this.handleDelete} handleEdit={this.handleEdit}/>
                        </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Menu