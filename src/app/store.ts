import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { signUpApi } from "./api/signUp.api";
import { bodyPostReducer } from "./Slices/bodyPostSlice";
import { connectEmailReducer } from "./Slices/connectEmailSlice";
import { connectShopifyReducer } from "./Slices/connectShopifySlice";
import { connectShopifyStoreReducer } from "./Slices/connectShopifyStoreSlice";
import { isCreateAccountDoneReducer } from "./Slices/isCreateAccountDoneSlice";
import { isRegistrationDoneReducer } from "./Slices/isRegistrationDoneSlice";
import { welcomeCreateAccountReducer } from "./Slices/welcomeCreateAccountSlice";

export const store = configureStore({
  reducer: {
    welcomeCreateAccount: welcomeCreateAccountReducer,
    connectShopify: connectShopifyReducer,
    connectEmail: connectEmailReducer,
    isRegistrationDone: isRegistrationDoneReducer,
    bodyPost: bodyPostReducer,
    isCreateAccountDone: isCreateAccountDoneReducer,
    isConnectShopifyStore: connectShopifyStoreReducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signUpApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
