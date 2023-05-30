import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [data, setData] =useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/${id}`).then((res)=>{
            setData(res.data)
        })
    },[data])
  return (
    <div className="detail">
                    <div className="card">
                        <div className="cardimg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="" /></div>
                        <div className="cardname">{data.name}</div>
                        <div className="cardprice">{data.price}$</div>
                    </div>
    </div>
  )
}

export default Detail