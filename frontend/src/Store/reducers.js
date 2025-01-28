import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{
        isLogin: 0
    },
    productInfo:{
        product:{}
    }
}

const userSlice = createSlice({
    name: "userState",
    initialState,

    reducers:
    {
        isUserLogin: (state, action)=>{
            state.userInfo.isLogin = action.payload
        },

        productDetails: (state, action)=>{
            state.productInfo.product = action.payload
        }
    }
})

export const {isUserLogin, productDetails} = userSlice.actions
export default userSlice.reducer