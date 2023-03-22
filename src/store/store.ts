import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./Nav";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
