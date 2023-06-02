const { createSlice } = require("@reduxjs/toolkit");
const { initialData } = require("../initialValues");

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialData.cart,
  reducers: {
    // action.payload = id продукта
    addToCart(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        product.count++
        return;
      }

      state.push({ _id: action.payload, count: 1, isSelected: false })
    },
    // action.payload = id продукта
    deleteFromCart(state, action) {
      return state.filter(product => product._id !== action.payload)
    },
    // action.payload = id продукта
    incrementCart(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        product.count++
        return;
      }
    },
    // action.payload = id продукта
    decrementCart(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        if (product.count > 1) {
          product.count--;
          return;
        }

        return state.filter(product => product._id !== action.payload)
      }
    }
  }
})

export const { addToCart, deleteFromCart, incrementCart, decrementCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer