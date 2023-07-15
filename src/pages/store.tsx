import { Button, Card, Col, Container, Nav, NavLink, Row } from "react-bootstrap"
import data from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency"
import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Link } from "react-router-dom"
import "../css/app.css"
const Store =()=>{
    const [showButton, setShowButton] = useState(true)
    return (
        <Container>
            <h1 className="display-2 text-balck-70 text-centermy-2">Store</h1>
            <hr className="mb-5"/>
            <Row md={2} lg={3} sm={1} xs={1}>
                {
                    data.map((item,key)=>{
                        return(
                            <Col width="400px" key={key}>
                            <StoreItem item={item}/>
                            </Col>
                         
                        )
                    })
                }
            </Row>
        </Container>
    )

}
function StoreItem (ifo:any){
   const item = ifo.item
   const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(item.id)

   return(
   
    <Card  className='mx-1 mb-4 d'>
         <Link to={"/Items/"+String(item.id)}>
        <Card.Img src={item.imgUrl[0]}/>
        </Link>
        <Card.Body>
        <Card.Title className="ps-3 align-items-baselined">
        <p className="mt-3 " style={{fontSize:20, textDecoration: 'none'}}>{item.name}</p>
        <h6 >Price: {formatCurrency(item.price)}</h6>
        </Card.Title>
        {quantity==0&&
        <Button className="w-100 " onClick={()=>{increaseCartQuantity(item.id)
        }}>+ Add to Cart</Button>}
        {quantity!=0&&
        
        <div className="d-flex align-items-center  justify-content-center w-100 mx-auto" style={{flexDirection:"column"}}>
        <div className="d-flex align-items-center justify-content-between w-75 mx-auto" >
        <Button onClick={()=>{decreaseCartQuantity(item.id)           }}>-</Button>
           <span className="d-flex align-items-center">{`${quantity}  in cart`}</span>
          <Button onClick={()=>{
         increaseCartQuantity(item.id)      }}>+</Button>
          <br/>
        </div>
        <div className="d-flex align-items-center justify-content-center mx-auto w-100 mt-2">
        <Button className="btn-danger mx-auto" onClick={()=>{
           removeFromCart(item.id)
           localStorage.removeItem(String(item.id))
        }}>
            <FontAwesomeIcon icon={faTrash}/> Remove
        </Button>
        </div>
        </div>
        }
        </Card.Body>
    </Card>
   )
}
export default Store

