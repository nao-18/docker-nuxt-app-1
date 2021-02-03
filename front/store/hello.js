//モジュールモード
export const state = () => ({
    message: 'Hello Vuex!!!!'
})

export const mutations = {
    updateMessage: (state, payload) => {
        state.message = payload
    }
}

export const actions = {
    updateMessageAction(content, payload) {
        content.commit('updateMessage', payload)
    }
}