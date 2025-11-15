import React, { useState, useEffect } from 'react';

const StoreManager = () => {
  const [stores, setStores] = useState([]);
  const [form, setForm] = useState({ store_id: null, store_name: '', store_type: '', description: '', address: '', city: '', state: '', zip_code: '', phone_number: '', email: '', image_url: '', latitude: '', longitude: '', established_date: '' });

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const response = await fetch('http://localhost/daniel/admin_api.php?table=stores');
    const data = await response.json();
    setStores(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.store_id ? 'PUT' : 'POST';
    const url = form.store_id ? `http://localhost/daniel/admin_api.php?table=stores&id=${form.store_id}` : 'http://localhost/daniel/admin_api.php?table=stores';

    await fetch(url, {
      method: method,
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    setForm({ store_id: null, store_name: '', store_type: '', description: '', address: '',  city: '', state: '', zip_code: '', phone_number: '', email: '', image_url: '', latitude: '', longitude: '', established_date: ''});
    fetchStores();
  };

  const handleEdit = (store) => {
    setForm(store);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this store?')) {
      await fetch(`http://localhost/daniel/admin_api.php?table=stores&id=${id}`, { method: 'DELETE' });
      fetchStores();
    }
  };

  return (
    <div>
      <h3>Manage Stores</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="store_name" value={form.store_name} onChange={handleChange} placeholder="Store name" className="form-control" required />
        </div>
        <div className="mb-2">
          <input type="text" name="store_type" value={form.store_type} onChange={handleChange} placeholder="Store type" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="City" className="form-control" />
        </div>
         <div className="mb-2">
          <input type="text" name="state" value={form.state} onChange={handleChange} placeholder="State" className="form-control" />
        </div>
         <div className="mb-2">
          <input type="text" name="zip_code" value={form.zip_code} onChange={handleChange} placeholder="Zip code" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="phone_number" value={form.phone_number} onChange={handleChange} placeholder="Phone number" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="form-control" />
        </div>    
        <div className="mb-2">
          <input type="text" name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image Filename" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="established_date" value={form.established_date} onChange={handleChange} placeholder="Established date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">{form.store_id ? 'Update Store' : 'Add Store'}</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stores.map(store => (
            <tr key={store.store_id}>
              <td>{store.store_id}</td>
              <td>{store.store_name}</td>
              <td>
                <button onClick={() => handleEdit(store)} className="btn btn-primary btn-sm me-2">Edit</button>
                <button onClick={() => handleDelete(store.store_id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreManager;