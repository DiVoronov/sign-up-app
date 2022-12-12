import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { signUpApi } from "./api/signUp.api";
import { bodyPostReducer } from "./Slices/bodyPostSlice";
import { connectEmailReducer } from "./Slices/connectEmailSlice";
import { connectShopifyReducer } from "./Slices/connectShopifySlice";
import { connectShopifyStoreReducer } from "./Slices/connectShopifyStoreSlice";
import { doNotUseGoogleReducer } from "./Slices/doNotUseGoogleSlice";
import { doNotUseShopifyReducer } from "./Slices/doNotUseShopifySlice";
import { identificationGoogleReducer } from "./Slices/identificationGoogle";
import { identificationGoogleObjectReducer } from "./Slices/identificationGoogleObject";
import { isCreateAccountDoneReducer } from "./Slices/isCreateAccountDoneSlice";
import { isLoadingGoogleReducer } from "./Slices/isLoadingGoogle";
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
    doNotUseShopify: doNotUseShopifyReducer,
    doNotUseGoogle: doNotUseGoogleReducer,
    identificationGoogle: identificationGoogleReducer,
    identificationGoogleObject: identificationGoogleObjectReducer,
    isLoadingGoogle: isLoadingGoogleReducer,
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
