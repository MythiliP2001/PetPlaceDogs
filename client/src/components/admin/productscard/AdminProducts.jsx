// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminProducts.css"; // Import the CSS file

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     image: null, // Make sure image is initially null
//   });
//   const [editProduct, setEditProduct] = useState(null);
//   const [message, setMessage] = useState("");

//   // Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/petcloth/getcloth");
//         if (response.data && Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           console.error("Invalid response structure:", response.data);
//           setProducts([]); // Fallback to an empty array if data is invalid
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]); // Set empty array in case of error
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Handle input changes for new/edit product
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (editProduct) {
//       setEditProduct({ ...editProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   // Handle file change for new/edit product
//   const handleFileChange = (e) => {
//     if (editProduct) {
//       setEditProduct({ ...editProduct, image: e.target.files[0] });
//     } else {
//       setNewProduct({ ...newProduct, image: e.target.files[0] });
//     }
//   };

//   // Add a new product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", newProduct.name);
//     formData.append("description", newProduct.description);
//     formData.append("price", newProduct.price);
//     formData.append("category", newProduct.category);
//     formData.append("image", newProduct.image);

//     try {
//       const response = await axios.post("http://localhost:5000/petcloth/addcloth", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setMessage(response.data.msg);
//       setProducts([...products, response.data.product]);
//       setNewProduct({ name: "", description: "", price: "", category: "", image: null });
//     } catch (error) {
//       console.error("Error adding product:", error);
//       setMessage("Failed to add product");
//     }
//   };

//   // Delete a product
//   const handleDeleteProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/petcloth/deleteproduct/${id}`);
//       setProducts(products.filter((product) => product._id !== id));
//       setMessage("Product deleted successfully");
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       setMessage("Failed to delete product");
//     }
//   };

//   // Edit a product
//   const handleEditProduct = (product) => {
//     setEditProduct(product);
//   };

//   // Update a product
//   const handleUpdateProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", editProduct.name);
//     formData.append("description", editProduct.description);
//     formData.append("price", editProduct.price);
//     formData.append("category", editProduct.category);
//     if (editProduct.image instanceof File) {
//       formData.append("image", editProduct.image);
//     }

//     try {
//       const response = await axios.put(`http://localhost:5000/admin/updateproduct/${editProduct._id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setMessage(response.data.msg);
//       setProducts(products.map((product) => (product._id === editProduct._id ? response.data.product : product)));
//       setEditProduct(null);
//     } catch (error) {
//       console.error("Error updating product:", error);
//       setMessage("Failed to update product");
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2 className="admin-products__header">Manage Products</h2>
//       {message && <p className="admin-products__message">{message}</p>}

//       <form className="admin-products__form" onSubmit={editProduct ? handleUpdateProduct : handleAddProduct}>
//         <h3>{editProduct ? "Edit Product" : "Add New Product"}</h3>
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           value={editProduct ? editProduct.name : newProduct.name || ""}
//           onChange={handleInputChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Product Description"
//           value={editProduct ? editProduct.description : newProduct.description || ""}
//           onChange={handleInputChange}
//           required
//         ></textarea>
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={editProduct ? editProduct.price : newProduct.price || ""}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={editProduct ? editProduct.category : newProduct.category || ""}
//           onChange={handleInputChange}
//           required
//         />
//         <input type="file" name="image" onChange={handleFileChange} />
//         <button type="submit">{editProduct ? "Update Product" : "Add Product"}</button>
//         {editProduct && <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>}
//       </form>

//       <div className="admin-products__list">
//         <h3>Existing Products</h3>
//         <ul>
//           {products && products.length > 0 ? (
//             products.map((product) => (
//               <li key={product._id} className="admin-products__item">
//                 <img
//                   src={product.image ? `http://localhost:5000/uploads/${product.image}` : '/default-image.jpg'}
//                   alt={product.name}
//                   className="admin-products__image"
//                 />
//                 <div className="admin-products__details">
//                   <h4 className="admin-products__name">{product.name}</h4>
//                   <p className="admin-products__description">{product.description}</p>
//                   <p className="admin-products__price">Price: ${product.price}</p>
//                   <p className="admin-products__category">Category: {product.category}</p>
//                   <button className="admin-products__button" onClick={() => handleEditProduct(product)}>Edit</button>
//                   <button className="admin-products__button" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
//                 </div>
//               </li>
//             ))
//           ) : (
//             <li>No products available</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [editProduct, setEditProduct] = useState(null);
  const [message, setMessage] = useState("");
  const [activeType, setActiveType] = useState("petcloth");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = `http://localhost:5000/${activeType}/get${
          activeType === "petcloth"
            ? "cloth"
            : activeType === "petbed"
            ? "beds"
            : activeType === "petfood"
            ? "food"
            : "toy"
        }`;
        console.log("Fetching products from:", endpoint);
        const response = await axios.get(endpoint);

        // Ensure all items have required properties
        const validProducts = (response.data || []).filter(
          (item) => item && item.image
        );

        setProducts(validProducts);
      } catch (error) {
        console.error(`Error fetching ${activeType} products:`, error);
        setProducts([]); // Ensure state is never undefined
      }
    };

    fetchProducts();
  }, [activeType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value ?? "", // Ensure it is always a string
    }));

    if (editProduct) {
      setEditProduct((prev) => ({
        ...prev,
        [name]: value ?? "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    if (editProduct) {
      setEditProduct((prev) => ({
        ...prev,
        image: file, // Update the image in the editProduct state
      }));
    } else {
      setNewProduct((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newProduct).forEach((key) => {
      formData.append(key, newProduct[key]);
    });

    try {
      const endpoint = `http://localhost:5000/${activeType}/add${
        activeType === "petcloth"
          ? "cloth"
          : activeType === "petbed"
          ? "bed"
          : activeType === "petfood"
          ? "food"
          : "toy"
      }`;

      const response = await axios.post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.msg);
      setProducts([...products, response.data.product]);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
    } catch (error) {
      console.error(`Error adding ${activeType}:`, error);
      setMessage(`Failed to add ${activeType}`);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/${activeType}/deleteproduct/${id}`
      );
      setProducts(products.filter((item) => item._id !== id));
      setMessage(
        `${
          activeType === "petcloth"
            ? "Cloth"
            : activeType === "petbed"
            ? "Bed"
            : activeType === "petfood"
            ? "Food"
            : "Toy"
        } deleted successfully`
      );
    } catch (error) {
      console.error(`Error deleting ${activeType}:`, error);
      setMessage(`Failed to delete ${activeType}`);
    }
  };

  const handleEditProduct = (item) => {
    setEditProduct(item);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(editProduct).forEach((key) => {
      if (key === "image" && !(editProduct[key] instanceof File)) return;
      formData.append(key, editProduct[key]);
    });

    try {
      const endpoint = `http://localhost:5000/${activeType}/updateproduct/${editProduct._id}`;
      console.log("Updating product with ID:", editProduct._id);

      const response = await axios.put(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.msg);
      setProducts(
        products.map((item) =>
          item._id === editProduct._id ? response.data.product : item
        )
      );
      setEditProduct(null);
    } catch (error) {
      console.error(`Error updating ${activeType}:`, error);
      setMessage(`Failed to update ${activeType}`);
    }
  };

  return (
    <div className="admin-products">
      <h2 className="title">Manage Products</h2>
      <div className="admin-products__switch">
        <button onClick={() => setActiveType("petcloth")}>Pet Clothing</button>
        <button onClick={() => setActiveType("petbed")}>Pet Beds</button>
        <button onClick={() => setActiveType("petfood")}>Pet Food</button>
        <button onClick={() => setActiveType("pettoy")}>Pet Toys</button>
      </div>
      {message && <p className="admin-products__message">{message}</p>}

      <form
        className="product-form"
        onSubmit={editProduct ? handleUpdateProduct : handleAddProduct}
      >
        <h3 className="form-title">
          {editProduct ? "Edit Product" : `Add New ${activeType}`}
        </h3>
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Name"
          value={editProduct?.name ?? newProduct.name ?? ""}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          className="form-input"
          placeholder="Description"
          value={editProduct?.description ?? newProduct.description ?? ""}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          className="form-input"
          placeholder="Price"
          value={editProduct?.price ?? newProduct.price ?? ""}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          className="form-input"
          placeholder="Category"
          value={editProduct?.category ?? newProduct.category ?? ""}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="image"
          className="form-input"
          onChange={handleFileChange}
        />
        <button type="submit" className="form-button">
          {editProduct ? "Update Product" : `Add ${activeType}`}
        </button>
        {editProduct && (
          <button
            type="button"
            className="form-button cancel-button"
            onClick={() => setEditProduct(null)}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="admin-products__list">
        <h3 className="list-title">
          {activeType === "petcloth"
            ? "Pet Clothing"
            : activeType === "petbed"
            ? "Pet Beds"
            : activeType === "petfood"
            ? "Pet Food"
            : "Pet Toys"}
        </h3>
        <ul className="product-list">
          {products && products.length > 0 ? (
            products.map((item) =>
              item && item.image ? (
                <li key={item._id} className="product-item">
                  <img
                    src={`http://localhost:5000/uploads/${item.image}`}
                    alt={item.name || "No Name Available"}
                    className="product-image"
                  />
                  <h4 className="product-name">
                    {item.name || "No Name Available"}
                  </h4>
                  <p className="product-description">
                    {item.description || "No Description Available"}
                  </p>
                  <p className="product-price">
                    Price: ${item.price || "N/A"}
                  </p>
                  <p className="product-category">
                    Category: {item.category || "No Category Available"}
                  </p>
                  <button
                    onClick={() => handleEditProduct(item)}
                    className="product-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(item._id)}
                    className="product-button"
                  >
                    Delete
                  </button>
                </li>
              ) : null
            )
          ) : (
            <li className="no-products">No products available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminProducts;
