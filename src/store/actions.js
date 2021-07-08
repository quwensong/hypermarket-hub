import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'

export default {
    addCart(context,payload){
        let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
 
        if (oldProduct){
            context.commit(ADD_COUNTER,oldProduct)
        }else {
            payload.count = 1
            // state.carList.push(payload)
            context.commit(ADD_TO_CART,payload)
        }
    }
}