import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
    const [item, setitem] = useState([])

    const addItemsToCartHandler = (data) => {
        console.log('Adding Items Working')
        const filterData = item.find(i => i.id===data.id)
        if(filterData){
            item.map(i => {
                if(i.id===filterData.id){
                    i.quantity = Number(i.quantity) + 1
                    i.price = Number(i.price) + Number(data.price)
                }
                return(1)
            })
            setitem([...item])
        }
        else{
            setitem([...item, data])
        }
        
    }
    const removeItemsFromCartHandler = (data) => {
        console.log('Removing Items Working')
        const filterData = item.find(i => i.id===data.id)
        if(filterData.quantity>1){
            item.map(i => {
                if(i.id===filterData.id){
                    i.quantity = Number(i.quantity) - 1
                    i.price = Number(i.price) - Number(data.price)
                }
                return(1)
            })
            setitem([...item])
        }
        else{
            const filteredData = item.filter(i => i.id!==filterData.id)
            setitem([...filteredData])
        }
        }
        const resetCart = () => {
            setitem([])
        }
        
    const cartcontext = {
        items:item,
        addItemsToCartHandler,
        removeItemsFromCartHandler,
        resetCart
    }
  return (
    <CartContext.Provider value={cartcontext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
