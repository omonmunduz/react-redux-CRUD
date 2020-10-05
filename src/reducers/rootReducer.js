const initStore = {
    customers:[
        {name:'John',lastName:'Doe',id:'1'},
        {name:'Mike',lastName:'Tyson',id:'2'},
        {name:'Joe',lastName:'Rogan',id:'3'},
        {name:'Emilia',lastName:'Clark',id:'4'},
    ]
}
const rootReducer =(state=initStore,action)=>{
    if(action.type==="ADD_CUSTOMER"){
        const newList = [...state.customers,action.data];
        return{
            ...state,
            customers:newList
        }
    }else if(action.type==="DELETE_CUSTOMER"){
        const newList = state.customers.filter(customer=>customer.id!==action.id);
        return{
            ...state,
            customers:newList
        }
    }else if(action.type ==="EDIT_CUSTOMER"){
        const newList = state.customers.map(customer=>customer.id===action.id?({...customer,editing:!customer.editing}):customer)
        return{
            ...state,
            customers:newList
        }
    }else if(action.type==="UPDATE_CUSTOMER"){
        const newList = state.customers.map(customer=>customer.id===action.id?{...customer,name:action.data.newName,lastName:action.data.newLastName,editing:!customer.editing}:customer);
        return{
            ...state,
            customers:newList
        }
    }

    return state
    
}


export default rootReducer;