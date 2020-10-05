import React,{Component} from 'react';
import { connect } from 'react-redux';

class AddCustomer extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        const name = this.getName.value;
        const lastName = this.getLastName.value;
        const data = {
            id: new Date(),
            name:name,
            lastName:lastName,
            editing:false
        }
        this.props.dispatch({
            type:"ADD_CUSTOMER",
            data
        })
        this.getName.value='';
        this.getLastName.value='';
    }
    render(){
        return(
            <div className="add-customer-component">
                <form className = "add-customer-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input required type='text' ref={(input)=>this.getName=input}/>
                    <label htmlFor="name">Last Name:</label>
                    <input required type='text' ref={(input)=>this.getLastName=input}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddCustomer)