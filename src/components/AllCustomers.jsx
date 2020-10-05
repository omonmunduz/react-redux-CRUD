import React,{Component} from 'react';
import {connect} from 'react-redux';
import Customer from './Customer';
import EditComponent from './EditComponent';
import AddCustomer from './AddCustomer';


class AllCustomers extends Component{
    render(){
        const {customers} = this.props;
        const customersList = customers.map(customer=>{
            return(
                <div className="all-customers-component"key = {customer.id}>
                    {customer.editing?(<EditComponent customer={customer} key={customer.id}/>) : (<Customer customer={customer}
                    key={customer.id}/>)}
                </div>
            )
        })
        return(
            <div>
                <AddCustomer/>
                {customersList}
            </div>
        )
    }
}


const mapstateToProps=(state)=>{
    return{
        customers:state.customers
    }
}



export default connect(mapstateToProps)(AllCustomers);