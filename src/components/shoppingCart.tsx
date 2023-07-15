import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./cartItem"
import { formatCurrency } from "../utils/formatCurrency"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}
export const ShoppingCart =({isOpen}:ShoppingCartProps)=>{
    const {closeCart,cartItems} = useShoppingCart()

    console.log(cartItems)
    return (<Offcanvas onHide={closeCart} show={isOpen} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item=>{
                   return(  <CartItem key={item.id} {...item} />)
                })}
                 <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>)
}