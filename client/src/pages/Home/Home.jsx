import React from 'react'
import CardList from '../../components/CardList/CardList'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <React.Fragment>
        <CardList/>
        <Toaster/>
    </React.Fragment>
  )
}

export default Home