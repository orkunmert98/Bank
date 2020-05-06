const INITIAL_STATE={

    account:null
}



export const addAccount=(payload)=>(
{
type:"addAccount",
payload:payload

}

)

export const removeAccount=()=>(
    {
    type:"removeAccount",
    
    
    }
    
    )


export const Accountreducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
    case "addAccount":
    
    
    return{
    ...state,
    
    account:action.payload
    
        };
        case "removeAccount":
    
    
            return{
            ...state,
            
            account:null
            
                };
        default:
            return state
    
    
    
    }
    
    
    
    
    }

