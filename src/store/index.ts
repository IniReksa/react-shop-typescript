import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

export default configureStore({
   reducer: {
      main: reducers.main
   }
})