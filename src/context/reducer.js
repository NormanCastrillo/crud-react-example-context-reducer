import { CREATE,UPDATE,DELETE } from "./actions";

export function reducer(state,action){
    switch(action.type){
        case CREATE:{
            return {
                ...state,
                products:[...state.products,action.payload]
            }
        }
        case UPDATE:{
            return {
                ...state,
                products:state.products.map((product)=>{
                    return (product.id === action.payload.id) ? action.payload:product
                })
            }
        }
        case DELETE:{
            return {
                ...state,
                products:state.products.filter((product)=>{
                   return product.id !== action.payload.id
                })
            }
        }
        default:
            return state
    }
}