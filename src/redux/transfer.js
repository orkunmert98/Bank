const INITIAL_STATE={

    transfer:0
}



export const addTransfer=(payload)=>(
{
type:"addTransfer",
payload:payload

}

)

export const Transferreducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
    case "addTransfer":
    
    
    return{
    ...state,
    
    transfer:action.payload
    
        };
  
        default:
            return state
    
    
    
    }
    
    
    
    
    }






