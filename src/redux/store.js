import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { conversionSlice } from './slices/conversionSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    conversionSaver: conversionSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST"],
        },
    })
})