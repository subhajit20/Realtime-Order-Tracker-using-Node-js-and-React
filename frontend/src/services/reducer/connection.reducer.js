import connection from "../states/connection.state";
const connectionReducer = (state=connection,action) => {
    const {allProducts} = state;
    switch(action.type){
        case "CREATE_CONNECTION":
            const ws = new WebSocket("ws://localhost:4000");
            return {
                ...state,
                ws:ws
            }
        case "GET_ALL_PRODUCTS":
            allProducts.push(action.payload)
            return {
                ...state,
                allProducts:[...allProducts]
            }
        case "GET_ALL_ORDERS":
            return {
                ...state,
                allOrders:[...action.payload]
            }
        default:
            return state;
    }
}

export default connectionReducer