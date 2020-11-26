import request from '../utils/request'

// const delay = (millisecond) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, millisecond)
//     })
// }
export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 100
    },

    effects: {
        *queryIntCards (_, sagaEffects) {
            const { call, put } = sagaEffects
            const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
            const puzzle = yield call(request, endPointURI)
            yield put({type: 'addNewCard', payload: puzzle})
        }
    },

    reducers: {
        addNewCard (state, {payload: newCard}) {
            const nextCounter = state.counter + 1
            const newcardwithId = {...newCard, id: nextCounter}
            const nextData = state.data.concat(newcardwithId)
            return {
                data: nextData,
                counter: nextCounter
            }
        }
    }
}