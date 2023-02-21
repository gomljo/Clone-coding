import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todo, { TodoReduxState } from "./todo";
import { TypedUseSelectorHook, 
    useSelector as useReduxSelector, 
} from "react-redux";
import { AnyAction } from "redux";
import { TodoType } from "../types/todo";



//* 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

declare module 'react-redux' {
    interface DefaultRootState extends RootState {}
}
const rootReducer = combineReducers({
    todo: todo.reducer,
});
//* 미들웨어 적용을 위한 스토어 enhencer
// const bindMiddleware = (middleware:any)=> {
//     if (process.env.NODE_ENV !== "production") {
//         const { composeWithDevTools } = require("redux-devtools-extension");
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if(state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
};

const initStore = () => {
    return configureStore({
        reducer,
        devTools: true,
    });
};

export const wrapper = createWrapper(initStore);