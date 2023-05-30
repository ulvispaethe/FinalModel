import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../../redux/wishlistSlice/wishlistSlice';
const CardList = () => {
    const items = useSelector(state=>state.wishlist.items)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [bine , setBine] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:8080/`).then((res)=>{
            setData(res.data)
        })
    },[searchValue==="", bine ? data : ""])
  return (
    <React.Fragment>
        <div className="top">
            <input type="text" placeholder='search' onChange={(e)=>{
                setSearchValue(e.target.value)
                setData(data.filter(item=>item.name.includes(searchValue)))
            }} />
            <button onClick={()=>{
                setData([...data.sort((a,b)=>b.price-a.price)])
            }} >Filter</button>
        </div>
        <div className="cardlist">
            {
                data.map((item,index)=>{
                    return(
                        <div className="card" key={index}>
                            <div className="cardimg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="" /></div>
                            <div className="cardname">{item.name}</div>
                            <div className="cardprice">{item.price}$</div>
                            <div className="btns">
                                <button > <Link to={`/${item._id}`}>Go Details</Link> </button>
                                <button onClick={()=>{
                                    axios.delete(`http://localhost:8080/${item._id}`).then((res)=>{
                                        toast.success("Item Silindi")
                                        window.location.reload(true)
                                    })
                                }} >Delete</button>
                                <button onClick={()=>{
                                    dispatch(addToWishlist({id: item._id, name:item.name, price:item.price}))
                                }} >Add to Wishlist</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default CardList