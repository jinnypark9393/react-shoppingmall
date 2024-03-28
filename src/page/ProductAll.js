import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const getProducts = async () => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url)
    let data = await response.json()
    // console.log("data", data)
    setProductList(data)
  }
  useEffect(()=> {
    getProducts()
  }, [])
  return (
    <div>
      {/* Container = 아이템을 가운데 두도록 함 */}
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}><ProductCard item={menu} /></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll