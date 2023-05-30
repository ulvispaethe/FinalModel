const {createSlice} = require('@reduxjs/toolkit')

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState:{
        items: []
    },
    reducers:{
        addToWishlist: (state,action)=>{
            state.items.push(action.payload)
            console.log(action.payload);
        },
        removeFromWishlist: (state,action)=>{
            let target = state.items.find(item=>item.id==action.payload)
            let indexOfTarget = state.items.indexOf(target)
            state.items.splice(indexOfTarget,1)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer