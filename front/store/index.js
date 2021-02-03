import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: () => {
            return {
                message: "Hello Vuex!!"
            }
        },
        // mutations: {
        //     updateMessage: (state) => {
        //         state.message = "Update message."
        //     }
        // },
        mutations: {
            updateMessage: (state, payload) => {
                state.message = payload
            }
        }
    })
}

export default createStore