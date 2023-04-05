import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/books/bookSlice";
import borrowReducer from "./pages/burrow-history/borrowSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    borrow: borrowReducer}
});
