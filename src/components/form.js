
function Form(props){
    return (
    <form className="form" onSubmit={e => e.preventDefault()}>
        <input className="form__text"type="text" value={props.value} onChange={props.handleChange} />
        <input className="form__btn"type="submit" value="Submit" onClick={props.handleSubmit} />
    </form>       
    )
}
export default Form