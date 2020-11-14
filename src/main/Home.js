import React from 'react'
import Layout from "./Layout"
import "./styles/Home.css"
const Home = () => {
  return (
    <Layout title="Ecommerce Page" description="MERN ECOMMERCE">
      <div className="main-panel">
        <div className="aside">Menu</div>
        <div className="panel-cards">Cards</div>
      </div>
    </Layout>
  )
}

export default Home
