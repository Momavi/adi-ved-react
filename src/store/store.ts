import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./Popup";
import medcardReducer from "./MedCard";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    medcard: medcardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
