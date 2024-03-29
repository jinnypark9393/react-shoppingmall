import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  // URL에 query parameter 설정
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    let searchQuery = query.get('q') || "" // q로 시작하는 쿼리
    // console.log("query: ", searchQuery)
    // q로 검색 가능한 것은 json-server에서 제공해주는 기능
    // local용 url
    // let url = `http://localhost:5000/products?q=${searchQuery}`
    // 배포용 url
    let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    // console.log("data", data)
    setProductList(data)
  }
  // 시작할때 한 번만 실행됨
  useEffect(()=> {
    getProducts()
  }, [query]) // query가 바뀌면 다시 호출
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