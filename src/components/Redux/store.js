import { configureStore} from '@reduxjs/toolkit';
import { reducer } from './RootSlices';

export const store = configureStore({
    reducer,
    devTools: true
})