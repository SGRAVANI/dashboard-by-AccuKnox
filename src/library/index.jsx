import widgetSlice from "../Slices/widgetSlice.js"
import { configureStore } from "@reduxjs/toolkit"
import searchSlide from "../Slices/searchSlide.js";
const store=configureStore({
    reducer:{
        "widget":widgetSlice,
        "search":searchSlide
    }
})
export default store;