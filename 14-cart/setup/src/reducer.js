const reducer = ( state, action) => {
    //// please do ot try this at home 🤣🤣😂  this actually gave a lot of issues because when i was trying to affect the reference of an object i was shallowing cloning it instead of deep cloning and is like useReducer hook normal console.log twice it console.log's before and after state change i think 🤔🤷‍♀️
    // if (action.type === 'INCREMENT') {
    //     let cartIndex = state.cart.findIndex((item) => item.id === action.payload);
    //     let newArr = JSON.parse(JSON.stringify(state.cart))
    //     newArr[cartIndex].amount += 1;
    //     // // state.cartItems = newArr;
    //     console.log(newArr);
    //     return { ...state,cart:newArr}
    // }


    if (action.type === 'CLEAR_ALL') {
        return {...state,cart:[]}
    }
    if (action.type === 'REMOVE_ITEM') {
        let tempCart = state.cart.filter((item)=> item.id !== action.payload)
        return {...state,cart:tempCart}
    }

 if (action.type === 'INCREMENT') {
        
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
         
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
    }
    
 if (action.type === 'DECREMENT') {
        //  console.log(state.cart[0]);
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 }
        }
        
      return cartItem
    }).filter((item) => item.amount > 0);
        
    return { ...state, cart: tempCart }
  }
     if (action.type === 'GET_TOTAL') {
         let {total,amount } = state.cart.reduce((allTotal,item) => {
             allTotal.total += (item.price) * item.amount; 
             allTotal.amount += item.amount;
           return allTotal
         },
             {
             total:0,
             amount:0
         }
         )
        total = parseFloat(total.toFixed(2))
         return {...state,total,amount}
     }
 
}
export default reducer;