import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { AuthApi, menuItemApi, shoppingCartApi } from "../../Apis";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { userAuthReducer } from "./userAuthSlice";

const store = configureStore({
    reducer:{
        menuItemStore: menuItemReducer,
        shoppingCartStore: shoppingCartReducer,
        userAuthStore: userAuthReducer,
        [menuItemApi.reducerPath]: menuItemApi.reducer,
        [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(menuItemApi.middleware)
    .concat(AuthApi.middleware)
    .concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;