import { Button, Container } from "react-bootstrap"
import {useParams } from "react-router-dom"
import data from '../data/items.json'
import { useState } from "react"
import { formatCurrency } from "../utils/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
interface Params{
    id:number
}
const ItemsView = () =>{
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity, removeFromCart,cartQuantity} = useShoppingCart()
    const {id}= useParams<Params>()
    const [image,setImage] = useState(data[id].imgUrl[0])

    const quantity = getItemQuantity(data[id].id)
    const [total,setTotal] = useState()

    return (
        <Container className="d-flex justify-content-around">
            <img src={image} height="800"/>
            <div className="d-block">
                <h1>{data[id].name}</h1>
                <div  className="d-block">
                <div className="d-flex justify-content-around">
                {data[id].imgUrl.map(img=>{
                        return (
                            <Button  className="mx-3 bg-body-secondary btn-outline-light"  onClick={
                                ()=>{
                                    setImage(img)
                                    }
                                }
                                    >
                            <img src={img} height="200" width='130' className="rounded-1" onClick={
                                ()=>{
                                setImage(img)
                                }
                            }/>
                            </Button>
                          
                        )
                })}
                </div>
                <h5 className="my-5">Price  {formatCurrency(data[id].price)}</h5>
                <h1 className="my-5">Total   {formatCurrency(quantity*data[id].price)}</h1>
                <div className="mt-4 ms-4 p-3 shadow-lg rounded-3" style={{background:'#F7CAC9'}}>
                                {quantity==0&&
                 <Button className="w-100" onClick={()=>{increaseCartQuantity(data[id].id)
                 }}>+ Add to Cart</Button>}
                 {quantity!=0&&
                 <div className="d-flex align-items-center  justify-content-center w-100 mx-auto" style={{flexDirection:"column"}}>
                 <div className="d-flex align-items-center justify-content-between w-75 mx-auto me-4" >
                 <Button onClick={()=>{decreaseCartQuantity(data[id].id)           }}>-</Button>
                    <h1 className="display-6">{`${quantity}  in cart`}</h1>
                    <Button onClick={()=>{
                    increaseCartQuantity(data[id].id)      }}>+</Button>
                    <br/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mx-auto w-100 mt-2">
                    <Button className="btn-danger mx-auto" onClick={()=>{
                    removeFromCart(data[id].id)
                    localStorage.removeItem(String(data[id].id))
}}>
    <FontAwesomeIcon icon={faTrash}/> Remove
</Button>
</div>
                                        
                                        </div>
                                    }
                                    </div>
                                    </div>
                                </div>
                                
                        </Container>
    )
}
export default ItemsView