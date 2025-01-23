import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { menu_list } from "../../assets/assetsnew";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Pets & Food Categories</h2>
      <Row className="justify-content-center">
        {menu_list.map((category, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            className="mb-4 text-center"
          >
            <div
              className="category-card"
              style={{ backgroundColor: category.bgColor || "#FFEBEE" }}
            >
              <img
                src={category.menu_image}
                alt={category.menu_name}
                className="category-image"
              />
              <div className="category-name">{category.menu_name}</div>
              <button
                className="shop-now-btn"
                onClick={() => handleCategoryClick(category.menu_name)}
              >
                Shop Now
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
