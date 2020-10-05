import React,{Component} from 'react';
import {connect} from 'react-redux'

class Customer extends Component{
    render(){
        const {customer}= this.props
        return(
            <div className="customer-component" key={customer.id}>
                <div className="name-div">Name: {customer.name}</div>
                <div className='name-div'>Last Name: {customer.lastName}</div>
                <button id="delete-btn" onClick={()=>this.props.dispatch({type:"DELETE_CUSTOMER",id:customer.id})}>Delete</button>
                <button id="edit-btn" onClick={()=>this.props.dispatch({type:"EDIT_CUSTOMER",id:customer.id})}>Edit</button>
            </div>
        )
    }
}

export default connect()(Customer);