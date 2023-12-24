import { configureStore } from "@reduxjs/toolkit";
    import diseaseSlice from "./KidneyData";

const store = configureStore({
    reducer: {
        disesaseData: diseaseSlice.reducer,
    }
})

export default store;