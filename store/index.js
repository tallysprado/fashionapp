import {createStore} from 'redux'


const INITIAL_STATE = {
    query: '',
    action: false,
}

function search(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SEARCH':
            //RETORNARÁ OS VALORES ANTIGOS DO STATE + O NOVO
            // return {...state, query: [...state.query, action.title]}

            //retornará apenas o último valor inserido no state
            return {...state, query: [action.title]}
        case 'ACTION':
            return {...state, action: [...state.query, action.title]}
        
            default:
            return state
    }
}

const store = createStore(search)

export default store