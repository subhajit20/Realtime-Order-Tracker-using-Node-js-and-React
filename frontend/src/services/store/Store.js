import connectionReducer from "../reducer/connection.reducer";
import {combineReducers,createStore} from 'redux'


const allReducer = combineReducers({
    connectionReducer:connectionReducer
})

const Store = createStore(allReducer);

export default Store;