import React, { useState, useEffect } from 'react';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ product_id: null, product_name: '', description: '', price: '', stock_quantity: '', category_id: '', image_url: '', thumbnail_url: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost/daniel/admin_api.php?table=products');
    const data = await response.json();
    setProducts(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.product_id ? 'PUT' : 'POST';
    const url = form.product_id ? `http://localhost/daniel/admin_api.php?table=products&id=${form.product_id}` : 'http://localhost/daniel/admin_api.php?table=products';

    await fetch(url, {
      method: method,
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    setForm({ product_id: null, product_name: '', description: '', price: '',  stock_quantity: '', category_id: '', image_url: '', thumbnail_url: ''});
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await fetch(`http://localhost/daniel/admin_api.php?table=products&id=${id}`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  return (
    <div>
      <h3>Manage Products</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="product_name" value={form.product_name} onChange={handleChange} placeholder="Product name" className="form-control" required />
        </div>
        <div className="mb-2">
          <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="stock_quantity" value={form.stock_quantity} onChange={handleChange} placeholder="Stock quantity" className="form-control" />
        </div>
         <div className="mb-2">
          <input type="text" name="category_id" value={form.category_id} onChange={handleChange} placeholder="Category id" className="form-control" />
        </div> 
        <div className="mb-2">
          <input type="text" name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image Filename" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="thumbnail_url" value={form.thumbnail_url} onChange={handleChange} placeholder="Thumbnail url" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">{form.product_id ? 'Update Product' : 'Add Product'}</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>
                <button onClick={() => handleEdit(product)} className="btn btn-primary btn-sm me-2">Edit</button>
                <button onClick={() => handleDelete(product.product_id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager;