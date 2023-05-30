import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../redux/wishlistSlice/wishlistSlice'

const Wishlist = () => {
    const items = useSelector(state=>state.wishlist.items)
    const dispatch = useDispatch()
  return (
    <div className="wishlist">
        {
            items.map((item,index)=>{
                return(
                    <div className="card" key={index}>
                        <div className="cardimg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="" /></div>
                        <div className="cardname">{item.name}</div>
                        <div className="cardprice">{item.price}$</div>
                        <div className="delbtn">
                            <button onClick={()=>{
                                dispatch(removeFromWishlist(item.id))
                            }} >Delete from wishlist</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Wishlist