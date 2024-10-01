import React, { useEffect, useState } from 'react';
import styles from "../../Pages/MyOrders/MyOrders.module.css";
import axios from 'axios';
import { AiOutlineClose, AiOutlinePlus, AiOutlineSave } from 'react-icons/ai';

const Products_Admin = () => {
    const [Products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        ratings: '',
        category: '',
        Stock: '',
        productImages: [{ public_id: '', url: '' }]
    });
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        document.title = "All Products";
        getProductdata();
    }, []);

    const getProductdata = async () => {
        try {
            const response = await axios.get('/api/mfsolars/v1/products/all');
            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`/api/mfsolars/v1/products/${productId}`);
            getProductdata();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (product) => {
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            ratings: product.ratings,
            category: product.category,
            Stock: product.Stock,
            productImages: product.productImages || [{ public_id: '', url: '' }]
        });
        setEditingProductId(product._id);
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put(`/api/mfsolars/v1/products/${editingProductId}`, formData);
            getProductdata();
            setEditingProductId(null);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageUrlChange = (e) => {
        const url = e.target.value;
        const publicId = extractPublicIdFromUrl(url);
        setFormData(prevData => ({
            ...prevData,
            productImages: [{ url, public_id: publicId }]
        }));
    };

    const extractPublicIdFromUrl = (url) => {
        const urlParts = url.split('/');
        const lastPart = urlParts[urlParts.length - 1].split('.')[0];
        return lastPart;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/mfsolars/v1/products/new', formData);
            getProductdata();
            setShowForm(false);
            setFormData({
                name: '',
                description: '',
                price: 1,
                ratings: 1,
                category: '',
                productImages: [{ public_id: '', url: '' }],
                Stock: 1
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem" }}>All Products</h1>
            <button className={styles.addButton} onClick={() => setShowForm(!showForm)}>
                <AiOutlinePlus /> Add Product
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className={styles.productForm}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={formData.description} onChange={handleChange} required />
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                    </label>
                    <label>
                        Ratings:
                        <input type="number" name="ratings" value={formData.ratings} onChange={handleChange} />
                    </label>
                    <label>
                        Category:
                        <select name="category" value={formData.category} onChange={handleChange} required>
                            <option value="" disabled>Select a category</option>
                            <option value="solar-accessories">Solar Accessories</option>
                            <option value="inverter">Inverter</option>
                            <option value="solar-batteries">Solar Batteries</option>
                            <option value="solar-kit">Solar Kits</option>
                            <option value="solar-lights">Solar Lights</option>
                            <option value="solar-security-camera">Solar Security Cameras</option>
                            <option value="on-sale">On Sale</option>
                        </select>
                    </label>
                    <label>
                        Stock:
                        <input type="number" name="Stock" value={formData.Stock} onChange={handleChange} required />
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={formData.productImages[0]?.url || ''}
                            onChange={handleImageUrlChange}
                            placeholder="Enter image URL"
                        />
                    </label>
                    <button type="submit">Add Product</button>
                </form>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product By</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Stock</th>
                        <th>Total Price (ZAR)</th>
                        <th>Ratings</th>
                        <th>Update/Delete Product</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((Product) => (
                        <tr key={Product?._id}>
                            <td data-label="ID">{Product?._id}</td>
                            <td data-label="Name">{Product?.creator?.name}</td>
                            <td data-label="Name">
                                {editingProductId === Product._id ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    Product?.name
                                )}
                            </td>
                            <td data-label="Category">
                                {editingProductId === Product._id ? (
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    Product?.category
                                )}
                            </td>
                            <td data-label="Stock">
                                {editingProductId === Product._id ? (
                                    <input
                                        type="number"
                                        name="Stock"
                                        value={formData.Stock}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    Product?.Stock
                                )}
                            </td>
                            <td data-label="Price">
                                {editingProductId === Product._id ? (
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    Product?.price
                                )}
                            </td>
                            <td data-label="Ratings">
                                {editingProductId === Product._id ? (
                                    <input
                                        type="number"
                                        name="ratings"
                                        value={formData.ratings}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    Product?.ratings
                                )}
                            </td>
                            <td data-label="Update" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {editingProductId === Product._id ? (
                                    <button className={styles.save} onClick={handleSaveChanges}>
                                        <AiOutlineSave />
                                    </button>
                                ) : (
                                    <button className={styles.edit} onClick={() => handleEditClick(Product)}>
                                        Edit
                                    </button>
                                )}
                                <button className={styles.delete} onClick={() => handleDeleteProduct(Product._id)}>
                                    <AiOutlineClose />
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default Products_Admin;
