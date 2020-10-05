import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component{

    handleEdit=(e)=>{
        e.preventDefault();
        const newName = this.getName.value;
        const newLastName = this.getLastName.value;
        const data = {
            newName,
            newLastName,
        }
        this.props.dispatch({type:'UPDATE_CUSTOMER',id:this.props.customer.id,data:data})
    }
    render(){
        return(
            <div className="edit-component" key ={this.props.customer.id}>
                <form className = "edit-form" onSubmit={this.handleEdit}>
                    <input type="text" ref={(input)=>this.getName=input} defaultValue={this.props.customer.name}/>
                    <input type="text" ref={(input)=>this.getLastName=input} defaultValue={this.props.customer.lastName}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditComponent);