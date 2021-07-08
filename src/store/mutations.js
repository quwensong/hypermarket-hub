import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'

export default {
    [ADD_COUNTER](state,payload){
        payload.count += 1
    },
    [ADD_TO_CART](state,payload){
        payload.check = true
        state.carList.push(payload)
    }
}