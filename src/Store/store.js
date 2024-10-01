// store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import productReducer from "./Product Reducers/productSlice";
import UserSlice from "./User Reducers/UserSlice";
import contactSlice from "./Contact Reducers/contactSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, UserSlice);

export const MF_SOLARS = configureStore({
    reducer: {
        product: productReducer,
        user: persistedUserReducer,
        contact: contactSlice,
    },
});

export const persistor = persistStore(MF_SOLARS);
