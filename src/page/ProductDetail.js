import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    // local 용 주소
    // let url = `http://localhost:5000/products/${id}`;
    // 배포용 주소
    let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    // 1. 아이템 전체 가운데 배치
    // 2. 레이아웃이 크게 2개로 나뉨: layout(row, col)
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <h4>₩{product?.price}</h4>
          <div className="choice-area">{product?.choice == true ? "Concious choice" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택" variant="dark">
            <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
            <Dropdown.Item href="#/action-2">S</Dropdown.Item>
            <Dropdown.Item href="#/action-3">M</Dropdown.Item>
            <Dropdown.Item href="#/action-4">L</Dropdown.Item>
            <Dropdown.Item href="#/action-5">XL</Dropdown.Item>
          </DropdownButton>
          <Button variant="dark" className="product-add-button">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
