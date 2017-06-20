/**
 * Created by HOANDHTB on 6/19/2017.
 */
var redux = require("redux")
// var defaultState = {mang: ["iOS", "java"], isAdding: false}
// var reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_IS_ADDING':
//             return {...state, isAdding: !state.isAdding};
//         case 'ADD_ITEM':
//             return {...state,mang:[...state.mang, action.item]};
//         case 'SUB_ITEM':
//             return {...state,mang:state.mang.filter((e,i)=>{
//                 i!=action.index
//             })};
//         default:
//             return state;
//     }
// }
var magReducer=(state=["iOS", "java",'nodeJs'],action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'REMOVE_ITEM':
            return state.filter((e,i)=>{
                i!=action.index
            });
        default:
            return state;
    }
};
var isAddingReducer=(state=false,action)=>{
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
              return !state
        default:
            return state;
    }
};
var reducer=redux.combineReducers({
    mang:magReducer,
    isAdding:isAddingReducer
})
var store = redux.createStore(
    reducer,
)

module.exports=store;