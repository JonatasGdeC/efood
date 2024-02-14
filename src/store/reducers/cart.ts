import { createSlice } from '@reduxjs/toolkit'
import { Restaurante } from '../../pages/Home'

type CartState = {
  items: Restaurante[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = cartSlice.actions
export default cartSlice.reducer
