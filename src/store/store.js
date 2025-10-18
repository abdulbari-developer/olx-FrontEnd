// import {configureStore} from "@reduxjs/toolkit"
// import productReducer  from "../features/product/productSlice"


// export const store = configureStore({
    //     reducer :{
        //       product : productReducer,
        
        //     }
        // })
        import authReducer from "../features/auth/authSlice"
        import productReducer  from "../features/product/productSlice";
        import { configureStore } from "@reduxjs/toolkit";
        

        export const store = configureStore({
            reducer:{
                auth:authReducer,
                product : productReducer
            }
        })